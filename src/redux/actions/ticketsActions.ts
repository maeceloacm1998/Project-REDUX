import {Dispatch} from "react"
import { Ticket,Error } from "../../utils/types";

export interface GetListTickets{
  readonly type: "ON_GET_LIST_TICKETS";
  payload: Array<Ticket>
}

export interface ErrorActionTickets{
  readonly type: "ON_TICKETS_ERROR";
  payload: Error
}

export type TicketAction = GetListTickets | ErrorActionTickets;

export const getListTickets = (value: Array<Ticket>) => {
  return async (dispatch: Dispatch<TicketAction>) => {
    try{
      dispatch({
        type: "ON_GET_LIST_TICKETS",
        payload: value
      })
    }catch(e){
      dispatch({
        type: "ON_TICKETS_ERROR",
        payload: {
          status: 404,
          message: "Erro na lista de tickets",
          data: e
        }
      })
    }
  }
}