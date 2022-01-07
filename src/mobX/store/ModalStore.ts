import { InitialStateModal } from '../types/types'
import { configure, makeAutoObservable } from 'mobx'

configure({
  enforceActions: 'never',
})

class ModalStore implements InitialStateModal {
  public isOpened = false

  constructor() {
    makeAutoObservable(this)
  }

  toggleModal(isOpened: boolean): void {
    this.isOpened = isOpened
  }
}

const modalStore = new ModalStore()
export default modalStore
