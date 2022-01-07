import { ActionTypes, InitialStateFilter } from '../actions/types'
import { FiltersActions } from '../actions/actionTypes/actionTypes'

const initialState: InitialStateFilter = {
  currencyType: 'RUB',
  stops: {
    all: true,
    without: false,
    one: false,
    two: false,
    three: false,
  },
}

export default function FilterReducer(
  state = initialState,
  action: FiltersActions
): InitialStateFilter {
  switch (action.type) {
    case ActionTypes.SET_CURRENCY_TYPE:
      return {
        ...state,
        currencyType: action.currencyType,
      }
    case ActionTypes.SET_CHECKBOX_VALUES:
      return {
        ...state,
        stops: action.values,
      }

    case ActionTypes.SET_CHECKBOX_VALUE:
      if (action.key === 'all' && action.value) {
        return {
          ...state,
          stops: {
            ...state.stops,
            all: action.value,
            without: false,
            one: false,
            two: false,
            three: false,
          },
        }
      } else if (action.key === 'all' && !action.value) {
        return {
          ...state,
          stops: {
            ...state.stops,
            all: !action.value,
            without: false,
            one: false,
            two: false,
            three: false,
          },
        }
      } else {
        return {
          ...state,
          stops: {
            ...state.stops,
            all: false,
            [action.key]: action.value,
          },
        }
      }

    default:
      return state
  }
}
