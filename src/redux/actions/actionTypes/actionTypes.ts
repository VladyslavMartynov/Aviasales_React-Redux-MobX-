import { ActionTypes, ICheckBox, ICurrency, ITicketData } from '../types'

export interface SetCurrency {
  type: ActionTypes.SET_CURRENCY_TYPE
  currencyType: string
}

export interface SetCheckboxValues {
  type: ActionTypes.SET_CHECKBOX_VALUES
  values: ICheckBox
}

export interface SetCheckBox {
  type: ActionTypes.SET_CHECKBOX_VALUE
  key: string
  value: boolean
}

export interface SetTicketsAction {
  type: ActionTypes.SET_TICKETS_ACTION
  tickets: ITicketData[]
}

export interface DeleteTicketsAction {
  type: ActionTypes.DELETE_TICKETS_ACTION
  id: number
}

export interface SetLoadingAction {
  type: ActionTypes.SET_LOADING_ACTION
  isLoading: boolean
}

export interface SetErrorAction {
  type: ActionTypes.SET_ERROR_ACTION
  error: string
}

export interface SetCurrencyAction {
  type: ActionTypes.SET_CURRENCY_ACTION
  currency: ICurrency
}

export interface SetModalState {
  type: ActionTypes.SET_MODAL_STATE
  isOpened: boolean
}

export type TicketsActions =
  | SetTicketsAction
  | DeleteTicketsAction
  | SetLoadingAction
  | SetErrorAction
  | SetCurrencyAction

export type FiltersActions = SetCurrency | SetCheckboxValues | SetCheckBox
export type ModalActions = SetModalState
