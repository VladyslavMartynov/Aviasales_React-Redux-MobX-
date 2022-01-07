import React, { ChangeEvent, useEffect } from 'react'
import { CurrencyMiddleWare } from '../../middlewares/CurrencyMiddleWare/CurrencyMiddleWare'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { filterDataSelector } from '../../redux/selectors/selectors'
import { setCurrencyType } from '../../redux/actions/actionCreators/actionCreators'
import './CurrencyFilter.scss'

enum currencies {
  USD = 'USD',
  EUR = 'EUR',
  RUB = 'RUB',
}

const CurrencyFilter: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { currencyType } = useAppSelector(filterDataSelector)

  const classNameRub =
    currencyType === currencies.RUB ? 'currency__item-active' : 'currency__item'

  const classNameUSD =
    currencyType === currencies.USD ? 'currency__item-active' : 'currency__item'

  const classNameEUR =
    currencyType === currencies.EUR ? 'currency__item-active' : 'currency__item'

  useEffect(() => {
    dispatch(CurrencyMiddleWare())
  }, [dispatch])

  const changeCurrencyValue = ({
    target,
  }: ChangeEvent<HTMLInputElement>): void => {
    const { name } = target
    dispatch(setCurrencyType(name))
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

export default CurrencyFilter
