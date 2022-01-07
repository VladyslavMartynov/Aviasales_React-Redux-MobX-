import {
  ActionTypes,
  ICheckBox,
  ICheckBoxValue,
  ICurrency,
  ITicketData,
} from '../types'
import { AppActions } from '../AppActions/AppActions'

export const setCurrencyType = (currencyType: string): AppActions => ({
  type: ActionTypes.SET_CURRENCY_TYPE,
  currencyType,
})

export const setCheckboxValues = (values: ICheckBox): AppActions => ({
  type: ActionTypes.SET_CHECKBOX_VALUES,
  values,
})

export const setTickets = (tickets: ITicketData[]): AppActions => ({
  type: ActionTypes.SET_TICKETS_ACTION,
  tickets,
})

export const setLoading = (isLoading: boolean): AppActions => ({
  type: ActionTypes.SET_LOADING_ACTION,
  isLoading,
})

export const setError = (error: string): AppActions => ({
  type: ActionTypes.SET_ERROR_ACTION,
  error,
})

export const setCurrency = (currency: ICurrency): AppActions => ({
  type: ActionTypes.SET_CURRENCY_ACTION,
  currency,
})

export const setModalState = (isOpened: boolean): AppActions => ({
  type: ActionTypes.SET_MODAL_STATE,
  isOpened,
})

export const setCheckBoxValue = ({
  value,
  key,
}: ICheckBoxValue): AppActions => ({
  type: ActionTypes.SET_CHECKBOX_VALUE,
  key,
  value,
})
