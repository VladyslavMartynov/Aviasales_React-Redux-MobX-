import React from 'react'

import TicketsList from './components/ticketsList/TicketsList'
import Logo from './components/logo/Logo'
import SideBar from './components/sidebar/SideBar'
import BaseModalWrapper from './components/modal/BaseModalWrapper'
import FormComponent from './components/form/FormComponent'

import './styles.css'
import './styles/common/common.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <div id="wrapper">
      <div className="container">
        <Logo />
        <div className="content__wrapper">
          <SideBar />
          <TicketsList />
        </div>
      </div>
      <BaseModalWrapper>
        <FormComponent />
      </BaseModalWrapper>
    </div>
  )
}

export default App
