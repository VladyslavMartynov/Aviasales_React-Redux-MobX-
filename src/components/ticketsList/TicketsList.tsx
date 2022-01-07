import React, { useCallback, useEffect } from 'react'

import { TicketMiddleWare } from '../../middlewares/TicketMiddleWare/TicketMiddleWare'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {
  filterDataSelector,
  ticketDataSelector,
} from '../../redux/selectors/selectors'
import { calculateCurrency } from '../../helpers/helpers'
import { ITicketData } from '../../redux/actions/types'

import TicketItem from '../ticketItem/TicketItem'
import Spinner from '../spinner/Spinner'
import ErrorComponent from '../error/Error'
import './TicketList.scss'

const TicketsList: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { ticketsData, isLoading, isError, currencyRate } = useAppSelector(
    ticketDataSelector
  )

  const { currencyType, stops } = useAppSelector(filterDataSelector)

  useEffect(() => {
    dispatch(TicketMiddleWare())
  }, [dispatch])

  const filterTickets = (tickets: ITicketData[]) => {
    return tickets.filter((ticket) => {
      if (stops.all) return true
      if (stops.without && ticket.stops === 0) return true
      if (stops.one && ticket.stops === 1) return true
      if (stops.two && ticket.stops === 2) return true
      if (stops.three && ticket.stops === 3) return true
    })
  }

  const spawnTicketsList = useCallback((): JSX.Element[] => {
    return filterTickets(ticketsData).map((ticket) => {
      return (
        <TicketItem
          key={ticket.price}
          ticket={{
            ...ticket,
            price: calculateCurrency(currencyRate, ticket.price, currencyType),
          }}
        />
      )
    })
  }, [filterTickets(ticketsData)])

  const displaySpinner = () => {
    useCallback(() => {
      if (isError) {
        return <ErrorComponent />
      } else if (isLoading) {
        return <Spinner />
      }
    }, [isError, isLoading])
  }

  return (
    <>
      {displaySpinner()}
      {<div className="ticket__container">{spawnTicketsList()}</div>}
    </>
  )
}

export default TicketsList
