import { InitialStateTicket, ITicketData } from '../types/types'
import { configure, makeAutoObservable } from 'mobx'
import axios from 'axios'
import { API_KEY, API_LINK, CURRENCY_API_LINK } from '../../constants/constants'
configure({
  enforceActions: 'never',
})

class TicketStore implements InitialStateTicket {
  public ticketsData: ITicketData[] = []
  public isLoading = false
  public isError = ''
  public currencyRate = {
    USD: 0.014,
    EUR: 0.012,
  }

  constructor() {
    makeAutoObservable(this)
  }

  async fetchTickets(): Promise<void> {
    try {
      this.isLoading = true
      const data = await axios.get(`${API_LINK}`)
      const formattedData = data.data
      const { tickets } = formattedData
      this.ticketsData = tickets.sort((a: ITicketData, b: ITicketData) => {
        return a.price < b.price ? 1 : -1
      })
    } catch (e) {
      this.isError = 'Fetching data error!'
    } finally {
      this.isLoading = false
    }
  }

  async fetchCurrency(): Promise<void> {
    try {
      this.isLoading = true
      const data = await axios.get(`${CURRENCY_API_LINK}${API_KEY}latest/RUB`)
      const formattedData = data.data
      const {
        conversion_rates: { EUR, USD },
      } = formattedData
      this.currencyRate = {
        USD: USD,
        EUR: EUR,
      }
    } catch (e) {
      this.isError = 'No currency was found, error!'
    } finally {
      this.isLoading = false
    }
  }
}

const ticketStore = new TicketStore()
export default ticketStore
