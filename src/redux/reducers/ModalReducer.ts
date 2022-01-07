import { ActionTypes, InitialStateModal } from '../actions/types'
import { ModalActions } from '../actions/actionTypes/actionTypes'

const initialState: InitialStateModal = {
  isOpened: false,
}

export default function ModalReducer(
  state = initialState,
  action: ModalActions
): InitialStateModal {
  switch (action.type) {
    case ActionTypes.SET_MODAL_STATE:
      return {
        ...state,
        isOpened: action.isOpened,
      }
    default:
      return state
  }
}
