import React from 'react'

import CurrencyFilter from '../currencyFilter/CurrencyFilter'
import CheckBox from '../checkbox/CheckBox'
import './Sidebar.scss'
import { observer } from 'mobx-react'

const SideBar: React.FC = observer(
  (): JSX.Element => (
    <div className="sidebar__container">
      <CurrencyFilter />
      <CheckBox />
    </div>
  )
)

export default SideBar
