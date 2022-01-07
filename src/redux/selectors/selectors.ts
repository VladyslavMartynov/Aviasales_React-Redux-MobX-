import { RootState } from '../../store'
import {
  InitialStateFilter,
  InitialStateModal,
  InitialStateTicket,
} from '../actions/types'

export const ticketDataSelector = ({
  ticketReducer,
}: RootState): InitialStateTicket => ticketReducer

export const filterDataSelector = ({
  filterReducer,
}: RootState): InitialStateFilter => filterReducer

export const modalDataSelector = ({
  modalReducer,
}: RootState): InitialStateModal => modalReducer
