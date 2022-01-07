import React, { useCallback } from 'react'

import { ITicketDataProp } from '../../redux/actions/types'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { modalDataSelector } from '../../redux/selectors/selectors'
import { setModalState } from '../../redux/actions/actionCreators/actionCreators'

import backgroundImage from '../../images/ticketsponsor.png'
import './TicketItem.scss'

interface TicketProp {
  ticket: ITicketDataProp
}

const TicketItem: React.FC<TicketProp> = ({
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
  const dispatch = useAppDispatch()
  const { isOpened } = useAppSelector(modalDataSelector)

  const toggleModal: React.MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.stopPropagation()
    dispatch(setModalState(!isOpened))
  }

  const formatStops = useCallback(
    (stop: number) => {
      switch (stop) {
        case 0:
          return `${stop}  пересадок`
        case 1:
          return `${stop}  пересадка`
        default:
          return `${stop}  пересадки`
      }
    },
    [stop]
  )

  return (
    <>
      <div className="ticket__item">
        <div className="ticket__price">
          <img
            className="ticket__sponsor"
            src={backgroundImage}
            alt="background"
          />
          <button onClick={toggleModal} type="button" className="ticket__btn">
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

export default TicketItem
