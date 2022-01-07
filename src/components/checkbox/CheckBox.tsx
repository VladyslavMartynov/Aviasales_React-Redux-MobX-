import React, { ChangeEvent, useEffect, useMemo } from 'react'
import { observer } from 'mobx-react'
import { ICheckBoxValues } from '../../constants/constants'
import filterStore from '../../mobX/store/FilterStore'

import './CheckBox.scss'

const CheckBox: React.FC = observer(
  (): JSX.Element => {
    const { stops } = filterStore

    const checkBoxOptions: ICheckBoxValues[] = useMemo(() => {
      return [
        {
          labelText: 'Все',
          name: 'all',
          checked: stops.all,
        },
        {
          labelText: 'Без пересадок',
          name: 'without',
          checked: stops.without,
        },
        {
          labelText: '1 Пересадка',
          name: 'one',
          checked: stops.one,
        },
        {
          labelText: '2 Пересадки',
          name: 'two',
          checked: stops.two,
        },
        {
          labelText: '3 Пересадки',
          name: 'three',
          checked: stops.three,
        },
      ]
    }, [stops])

    useEffect(() => {
      if (stops.three && stops.two && stops.without && stops.one) {
        filterStore.setCheckBoxValue('all', true)
      }

      if (!stops.three && !stops.two && !stops.without && !stops.one) {
        filterStore.setCheckBoxValue('all', true)
      }
    }, [stops.three, stops.two, stops.without, stops.one])

    const onChangeValue = (
      e: ChangeEvent<HTMLInputElement>,
      value: boolean
    ): void => {
      const { name } = e.target
      filterStore.setCheckBoxValue(name, value)
    }

    const spawnCheckboxList = (): JSX.Element[] => {
      return checkBoxOptions.map((checkbox) => {
        return (
          <div key={checkbox.name} className="checkbox__item">
            <label className="checkbox__label">
              <input
                type="checkbox"
                className="visually-hidden"
                onChange={(e) => onChangeValue(e, !checkbox.checked)}
                name={checkbox.name}
                checked={checkbox.checked}
              />
              <span className="checkbox__checker" />
              {checkbox.labelText}
            </label>
          </div>
        )
      })
    }

    return (
      <div className="checkbox__container">
        <h3 className="checkbox__slogan">Количество пересадок</h3>
        {spawnCheckboxList()}
      </div>
    )
  }
)

export default CheckBox
