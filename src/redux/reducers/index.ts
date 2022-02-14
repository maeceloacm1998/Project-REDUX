import {combineReducers} from "redux"

import { TicketsReducer } from "./ticketsReducer";

export const rootReducer = combineReducers({
  dataTicket: TicketsReducer
})

export type ApplicationReducer = ReturnType<typeof rootReducer>;