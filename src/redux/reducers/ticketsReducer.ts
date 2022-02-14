type TicketsStateModel = {
  listTickets: Array<any>;
};

const initialState: TicketsStateModel = {
  listTickets: [],
};

export const TicketsReducer = (
  state: TicketsStateModel = initialState,
  action: any
) => {
  switch (action.type) {
    case "ON_GET_LIST_TICKETS":
      return {
        ...state,
        listTickets: action.payload,
      };
  }
};
