import React, { ChangeEvent, useEffect } from 'react'
import { observer } from 'mobx-react'
import filterStore from '../../mobX/store/FilterStore'
import ticketStore from '../../mobX/store/TicketStore'
import './CurrencyFilter.scss'

enum currencies {
  USD = 'USD',
  EUR = 'EUR',
  RUB = 'RUB',
}

const CurrencyFilter: React.FC = observer(
  (): JSX.Element => {
    const { currencyType } = filterStore

    const classNameRub =
      currencyType === currencies.RUB
        ? 'currency__item-active'
        : 'currency__item'

    const classNameUSD =
      currencyType === currencies.USD
        ? 'currency__item-active'
        : 'currency__item'

    const classNameEUR =
      currencyType === currencies.EUR
        ? 'currency__item-active'
        : 'currency__item'

    useEffect(() => {
      ticketStore.fetchCurrency()
    }, [ticketStore.fetchCurrency])

    const changeCurrencyValue = ({
      target,
    }: ChangeEvent<HTMLInputElement>): void => {
      const { name } = target
      filterStore.setCurrencyType(name)
    }

    return (
      <div className="currency__wrapper">
        <h3 className="currency__slogan">Валюта</h3>
        <div className="currency__box">
          <label>
            <span className={classNameRub}>RUB</span>
            <input
              name="RUB"
              value="RUB"
              className="currency__input"
              type="radio"
              onChange={changeCurrencyValue}
              checked={currencyType === currencies.RUB}
            />
          </label>
          <label>
            <span className={classNameUSD}>
              USD
              <input
                name="USD"
                value="USD"
                className="currency__input"
                type="radio"
                onChange={changeCurrencyValue}
                checked={currencyType === currencies.USD}
              />
            </span>
          </label>
          <label>
            <span className={classNameEUR}>EUR</span>
            <input
              name="EUR"
              value="EUR"
              className="currency__input"
              type="radio"
              onChange={changeCurrencyValue}
              checked={currencyType === currencies.EUR}
            />
          </label>
        </div>
      </div>
    )
  }
)

export default CurrencyFilter
