import React, { ChangeEvent, useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { filterDataSelector } from '../../redux/selectors/selectors'
import { setCheckBoxValue } from '../../redux/actions/actionCreators/actionCreators'
import { ICheckBoxValues } from '../../constants/constants'

import './CheckBox.scss'

const CheckBox: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { stops } = useAppSelector(filterDataSelector)

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
      dispatch(
        setCheckBoxValue({
          value: true,
          key: 'all',
        })
      )
    }

    if (!stops.three && !stops.two && !stops.without && !stops.one) {
      dispatch(
        setCheckBoxValue({
          value: true,
          key: 'all',
        })
      )
    }
  }, [stops.three, stops.two, stops.without, stops.one])

  const onChangeValue = (
    e: ChangeEvent<HTMLInputElement>,
    value: boolean
  ): void => {
    const { name } = e.target
    dispatch(
      setCheckBoxValue({
        value: value,
        key: name,
      })
    )
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

export default CheckBox
