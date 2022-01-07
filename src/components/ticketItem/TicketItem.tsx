import React from 'react'
import { observer } from 'mobx-react'
import modalStore from '../../mobX/store/ModalStore'
import { ITicketDataProp } from '../../mobX/types/types'

import backgroundImage from '../../images/ticketsponsor.png'
import './TicketItem.scss'

interface TicketProp {
  ticket: ITicketDataProp
}

const TicketItem: React.FC<TicketProp> = observer(
  ({
    ticket: {
      price,
      origin,
      origin_name,
      departure_time,
      departure_date,
      arrival_time,
      destination,
      destination_name,
      arrival_date,
      stops,
    },
  }): JSX.Element => {
    const { isOpened } = modalStore

    const toggleModalValue: React.MouseEventHandler<HTMLButtonElement> = (
      e
    ): void => {
      e.stopPropagation()
      modalStore.toggleModal(!isOpened)
    }

    const formatStops = (stop: number) => {
      switch (stop) {
        case 0:
          return `${stop}  пересадок`
        case 1:
          return `${stop}  пересадка`
        default:
          return `${stop}  пересадки`
      }
    }

    return (
      <>
        <div className="ticket__item">
          <div className="ticket__price">
            <img
              className="ticket__sponsor"
              src={backgroundImage}
              alt="background"
            />
            <button
              onClick={toggleModalValue}
              type="button"
              className="ticket__btn"
            >
              Купить за <br />
              {price}
            </button>
          </div>

          <div className="ticket__info">
            <div className="ticket__info-wrapper">
              <div className="ticket__departure-info">
                <h2 className="ticket__departure_time">{departure_time}</h2>
                <span className="ticket__origin">
                  {origin}, {origin_name}
                </span>
                <br />
                <span className="ticket__departure_date">{departure_date}</span>
              </div>

              <div className="ticket__stops-info">
                <span className="ticket__stops">{formatStops(stops)}</span>
              </div>

              <div className="ticket__arrival-info">
                <h2 className="ticket__arrival_time">{arrival_time}</h2>
                <span className="ticket__destination">
                  {destination}, {destination_name}
                </span>
                <br />
                <span className="ticket__arrival_date">{arrival_date}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
)

export default TicketItem
