import React from 'react'
import { observer } from 'mobx-react'
import modalStore from '../../mobX/store/ModalStore'

import Modal from './Modal'
import './Modal.scss'

const BaseModalWrapper: React.FC = observer(({ children }) => {
  const { isOpened } = modalStore

  const toggleModal = (): void => {
    modalStore.toggleModal(!isOpened)
  }

  if (!isOpened) {
    return null
  }

  return (
    <Modal onBackDropClick={toggleModal}>
      <div className="modal__container-desc">
        <span className="modal__exit" onClick={toggleModal}>
          X
        </span>
        {children}
      </div>
    </Modal>
  )
})

export default BaseModalWrapper
