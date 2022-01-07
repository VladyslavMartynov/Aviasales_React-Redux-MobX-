import React from 'react'
import './Error.scss'

const ErrorComponent: React.FC = (): JSX.Element => (
  <div className="error__wrapper">
    <h1 className="error__slogan">Ошибка 404, перезагрузите страницу!</h1>
  </div>
)

export default ErrorComponent
