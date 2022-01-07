import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { AppActions } from './redux/actions/AppActions/AppActions'
import TicketReducer from './redux/reducers/TicketReducer'
import FilterReducer from './redux/reducers/FilterReducer'
import ModalReducer from './redux/reducers/ModalReducer'

const rootReducer = combineReducers({
  ticketReducer: TicketReducer,
  filterReducer: FilterReducer,
  modalReducer: ModalReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, logger)
  )
)
export default store
export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
