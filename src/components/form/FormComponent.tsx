import React, { ChangeEvent, useState } from 'react'
import CustomAlert from '../customAlert/CustomAlert'

import './Form.scss'

interface IFormValues {
  email: string
  phone: string
  firstName: string
  secondName: string
  passportNumber: string
}

interface IErrorValues {
  email?: string
  phone?: string
  firstName?: string
  secondName?: string
  passportNumber?: string
}

interface IInputListOptions {
  id: number
  value: string
  name: string
  placeholder: string
  labelName: string
  type: string
  errorText?: string
  focus?: string
}

const FormComponent: React.FC = (): JSX.Element => {
  const [formValues, setFormValues] = useState<IFormValues>({
    email: '',
    phone: '',
    firstName: '',
    secondName: '',
    passportNumber: '',
  })

  const [formErrors, setFormErrors] = useState<IErrorValues>({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = (values: IFormValues) => {
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    const passportNumberRegExp = /^(?!^0+$)[a-zA-Z0-9]{6,9}$/g
    const errors: IErrorValues = {}
    if (!values.firstName) {
      errors.firstName = 'Username is required!'
    }
    if (!values.secondName) {
      errors.secondName = 'SecondName is required!'
    }
    if (!values.passportNumber) {
      errors.passportNumber = 'PassportNumber is required!'
    } else if (values.passportNumber.length < 5) {
      errors.passportNumber = 'PassportNumber should have 5 symbols!'
    } else if (!passportNumberRegExp.test(values.passportNumber)) {
      errors.passportNumber = 'It is not valid passport number!'
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required!'
    } else if (values.phone.length < 9) {
      errors.phone = 'Phone number should have 9 symbols!'
    } else if (!phoneRegExp.test(values.phone)) {
      errors.phone = 'It is not valid phone number!'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!emailRegExp.test(values.email)) {
      errors.email = 'It is not valid email!'
    }
    return errors
  }

  const inputOptions: IInputListOptions[] = [
    {
      id: 1,
      value: formValues.email,
      name: 'email',
      placeholder: 'Email',
      labelName: 'Email',
      type: 'text',
      errorText: formErrors.email,
    },
    {
      id: 2,
      value: formValues.phone,
      name: 'phone',
      placeholder: 'phone',
      labelName: 'Phone',
      type: 'tel',
      errorText: formErrors.phone,
    },
    {
      id: 3,
      value: formValues.firstName,
      name: 'firstName',
      placeholder: 'Firstname',
      labelName: 'Firstname',
      type: 'text',
      errorText: formErrors.firstName,
    },
    {
      id: 4,
      value: formValues.secondName,
      name: 'secondName',
      placeholder: 'Secondname',
      labelName: 'Secondname',
      type: 'text',
      errorText: formErrors.secondName,
    },
    {
      id: 5,
      value: formValues.passportNumber,
      name: 'passportNumber',
      placeholder: 'Passportnumber',
      labelName: 'Passportnumber',
      type: 'text',
      errorText: formErrors.passportNumber,
    },
  ]

  const handleAlertAppearance = (): JSX.Element => {
    const condition = Object.values(formErrors).length === 0 && isSubmit
    return condition ? <CustomAlert /> : <div />
  }

  const spawnInputList = (): JSX.Element[] => {
    return inputOptions.map((input) => {
      return (
        <React.Fragment key={input.id}>
          <div className="form__field">
            <label className="form__label">{input.labelName}</label>
            <div className="form__input">
              <input
                type={input.type}
                value={input.value}
                onChange={handleChange}
                name={input.name}
                placeholder={input.placeholder}
                autoComplete="off"
              />
            </div>
          </div>
          <p className="form__error">{input.errorText}</p>
        </React.Fragment>
      )
    })
  }

  return (
    <>
      {handleAlertAppearance()}
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <div className="input__wrapper">
            {spawnInputList()}
            <button
              className="form__btn"
              type="submit"
              onClick={handleAlertAppearance}
            >
              Buy
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormComponent
