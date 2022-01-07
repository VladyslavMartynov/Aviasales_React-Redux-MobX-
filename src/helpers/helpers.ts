import { ICurrency } from '../redux/actions/types'

export const calculateCurrency = (
  currencyRate: ICurrency,
  price: number,
  selectedTyped: string
): string => {
  switch (selectedTyped) {
    case 'USD':
      return parseInt(String(price * currencyRate.USD)) + '$'
    case 'EUR':
      return parseInt(String(price * currencyRate.EUR)) + '€'
    default:
      return price + '₽'
  }
}
