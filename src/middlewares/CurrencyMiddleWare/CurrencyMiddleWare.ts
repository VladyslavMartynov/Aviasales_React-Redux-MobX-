import { Dispatch } from 'redux'
import axios from 'axios'

import { API_KEY, CURRENCY_API_LINK } from '../../constants/constants'
import { AppActions } from '../../redux/actions/AppActions/AppActions'
import {
  setCurrency,
  setError,
  setLoading,
} from '../../redux/actions/actionCreators/actionCreators'

export const CurrencyMiddleWare = () => async (
  dispatch: Dispatch<AppActions>
): Promise<void> => {
  try {
    dispatch(setLoading(true))
    const data = await axios.get(`${CURRENCY_API_LINK}${API_KEY}latest/RUB`)
    const formattedData = data.data
    const {
      conversion_rates: { EUR, USD },
    } = formattedData

    dispatch(
      setCurrency({
        USD: USD,
        EUR: EUR,
      })
    )
  } catch (e) {
    dispatch(setError('No currency was found, error!'))
  } finally {
    dispatch(setLoading(false))
  }
}
