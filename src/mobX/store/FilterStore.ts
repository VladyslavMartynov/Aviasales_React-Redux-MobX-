import { ICheckBox, InitialStateFilter } from '../types/types'
import { configure, makeAutoObservable } from 'mobx'

configure({
  enforceActions: 'never',
})

class FilterStore implements InitialStateFilter {
  public currencyType = 'RUB'
  public stops: ICheckBox = {
    all: true,
    without: false,
    one: false,
    two: false,
    three: false,
  }

  constructor() {
    makeAutoObservable(this)
  }

  setCurrencyType(currency: string): void {
    this.currencyType = currency
  }

  setCheckBoxValue(key: string, value: boolean): void {
    if (key === 'all' && value) {
      this.stops = {
        all: value,
        without: false,
        one: false,
        two: false,
        three: false,
      }
    } else if (key === 'all' && !value) {
      this.stops = {
        all: !value,
        without: false,
        one: false,
        two: false,
        three: false,
      }
    } else {
      this.stops = {
        ...this.stops,
        all: false,
        [key]: value,
      }
    }
  }
}

const filterStore = new FilterStore()
export default filterStore
