import React from 'react'

import CurrencyFilter from '../currencyFilter/CurrencyFilter'
import CheckBox from '../checkbox/CheckBox'
import './Sidebar.scss'

const SideBar: React.FC = (): JSX.Element => (
  <div className="sidebar__container">
    <CurrencyFilter />
    <CheckBox />
  </div>
)

export default SideBar
