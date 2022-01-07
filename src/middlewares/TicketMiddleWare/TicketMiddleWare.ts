import { Dispatch } from 'redux'
import axios from 'axios'
import { API_LINK } from '../../constants/constants'

import { AppActions } from '../../redux/actions/AppActions/AppActions'
import {
  setError,
  setLoading,
  setTickets,
} from '../../redux/actions/actionCreators/actionCreators'
import { ITicketData } from '../../redux/actions/types'

export const TicketMiddleWare = () => async (
  dispatch: Dispatch<AppActions>
): Promise<void> => {
  try {
    dispatch(setLoading(true))
    const data = await axios.get(`${API_LINK}`)
    const formattedData = data.data
    const { tickets } = formattedData
    dispatch(
      setTickets(
        tickets.sort((a: ITicketData, b: ITicketData) => {
          return a.price < b.price ? 1 : -1
        })
      )
    )
  } catch (e) {
    dispatch(setError('Fetching data error!'))
  } finally {
    dispatch(setLoading(false))
  }
}
