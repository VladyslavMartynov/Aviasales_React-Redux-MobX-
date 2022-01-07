import { ActionTypes, InitialStateTicket } from '../actions/types'
import { TicketsActions } from '../actions/actionTypes/actionTypes'

const initialState: InitialStateTicket = {
  ticketsData: [],
  isLoading: false,
  isError: '',
  currencyRate: {
    USD: 0,
    EUR: 0,
  },
}

export default function TicketReducer(
  state = initialState,
  action: TicketsActions
): InitialStateTicket {
  switch (action.type) {
    case ActionTypes.SET_TICKETS_ACTION:
      return {
        ...state,
        ticketsData: action.tickets,
      }
    case ActionTypes.DELETE_TICKETS_ACTION:
      return {
        ...state,
      }
    case ActionTypes.SET_LOADING_ACTION:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ActionTypes.SET_ERROR_ACTION:
      return {
        ...state,
        isError: action.error,
      }
    case ActionTypes.SET_CURRENCY_ACTION:
      return {
        ...state,
        currencyRate: {
          USD: action.currency.USD,
          EUR: action.currency.EUR,
        },
      }
    default:
      return state
  }
}
