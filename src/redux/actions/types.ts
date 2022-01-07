export interface ITicketDataCommon {
  origin: string
  origin_name: string
  destination: string
  destination_name: string
  departure_date: string
  departure_time: string
  arrival_date: string
  arrival_time: string
  carrier: string
  stops: number
}

export interface ITicketData extends ITicketDataCommon {
  price: number
}

export interface ITicketDataProp extends ITicketDataCommon {
  price: string
}

export interface ICurrency {
  USD: number
  EUR: number
}

export interface InitialStateTicket {
  ticketsData: ITicketData[]
  isLoading: boolean
  isError: string
  currencyRate: ICurrency
}

export interface InitialStateFilter {
  currencyType: string
  stops: ICheckBox
}

export interface ICheckBox {
  all: boolean
  without: boolean
  one: boolean
  two: boolean
  three: boolean
}

export interface ICheckBoxValue {
  key: string
  value: boolean
}

export interface InitialStateModal {
  isOpened: boolean
}

export enum ActionTypes {
  SET_TICKETS_ACTION = 'SET_TICKETS_ACTION',
  DELETE_TICKETS_ACTION = 'DELETE_TICKETS_ACTION',
  SET_LOADING_ACTION = 'SET_LOADING',
  SET_ERROR_ACTION = 'SET_ERROR_ACTION',
  SET_CURRENCY_ACTION = 'SET_CURRENCY_ACTION',
  SET_CURRENCY_TYPE = 'SET_CURRENCY_TYPE',
  SET_CHECKBOX_VALUES = 'SET_CHECKBOX_VALUES',
  SET_MODAL_STATE = 'SET_MODAL_STATE',
  SET_CHECKBOX_VALUE = 'SET_CHECKBOX_VALUE',
}
