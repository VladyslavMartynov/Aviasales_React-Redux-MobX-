import React from 'react'

import LogoImage from '../../images/logoavio.svg'
import './Logo.scss'

const Logo: React.FC = (): JSX.Element => (
  <div className="logo__wrapper">
    <img className="logo__icon" src={LogoImage} alt="Aviasale logo" />
  </div>
)

export default Logo
