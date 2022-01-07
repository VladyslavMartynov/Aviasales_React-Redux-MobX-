import React from 'react'
import ReactDOM from 'react-dom'

import './Modal.scss'

interface IModalProp {
  onBackDropClick: () => void
}

const Modal: React.FC<IModalProp> = ({ onBackDropClick, children }) => {
  const handleStopPropagation = (e: { stopPropagation: () => void }): void => {
    e.stopPropagation()
  }

  return ReactDOM.createPortal(
    <div className="modal__overlay" onClick={onBackDropClick}>
      <div onClick={handleStopPropagation}>{children}</div>
    </div>,
    document.getElementById('modal') as HTMLElement
  )
}

export default Modal
