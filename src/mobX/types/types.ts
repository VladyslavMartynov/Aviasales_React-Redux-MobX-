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
  all?: boolean | undefined
  without?: boolean | undefined
  one?: boolean | undefined
  two?: boolean | undefined
  three?: boolean | undefined
  [key: string]: boolean | undefined
}

export interface ICheckBoxValue {
  key: string
  value: boolean
}

export interface InitialStateModal {
  isOpened: boolean
}
