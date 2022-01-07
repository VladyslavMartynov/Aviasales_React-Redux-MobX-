import React, { useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'
import ticketStore from '../../mobX/store/TicketStore'
import filterStore from '../../mobX/store/FilterStore'
import { ITicketData } from '../../mobX/types/types'
import { calculateCurrency } from '../../helpers/helpers'

import TicketItem from '../ticketItem/TicketItem'
import Spinner from '../spinner/Spinner'
import ErrorComponent from '../error/Error'

import './TicketList.scss'

const TicketsList: React.FC = observer(
  (): JSX.Element => {
    useEffect(() => {
      ticketStore.fetchTickets()
    }, [ticketStore.fetchTickets])

    const filterTickets = (tickets: ITicketData[]): ITicketData[] => {
      return tickets.filter((ticket) => {
        if (filterStore.stops.all) return true
        if (filterStore.stops.without && ticket.stops === 0) return true
        if (filterStore.stops.one && ticket.stops === 1) return true
        if (filterStore.stops.two && ticket.stops === 2) return true
        if (filterStore.stops.three && ticket.stops === 3) return true
      })
    }

    const spawnTicketsList = (): JSX.Element[] => {
      return filterTickets(ticketStore.ticketsData).map((ticket) => {
        return (
          <TicketItem
            key={ticket.price}
            ticket={{
              ...ticket,
              price: calculateCurrency(
                ticketStore.currencyRate,
                ticket.price,
                filterStore.currencyType
              ),
            }}
          />
        )
      })
    }

    const displaySpinner = () => {
      useCallback(() => {
        if (ticketStore.isError) {
          return <ErrorComponent />
        } else if (ticketStore.isLoading) {
          return <Spinner />
        }
      }, [ticketStore.isError, ticketStore.isLoading])
    }

    return (
      <>
        {displaySpinner()}
        {<div className="ticket__container">{spawnTicketsList()}</div>}
      </>
    )
  }
)

export default TicketsList
