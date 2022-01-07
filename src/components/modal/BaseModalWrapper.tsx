import React from 'react'
import { setModalState } from '../../redux/actions/actionCreators/actionCreators'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { modalDataSelector } from '../../redux/selectors/selectors'

import Modal from './Modal'
import './Modal.scss'

const BaseModalWrapper: React.FC = ({ children }) => {
  const dispatch = useAppDispatch()
  const { isOpened } = useAppSelector(modalDataSelector)

  const toggleModal = (): void => {
    dispatch(setModalState(!isOpened))
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
}

export default BaseModalWrapper
