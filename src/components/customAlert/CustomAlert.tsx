import * as React from 'react'
import { useCallback } from 'react'
import Alert from '@mui/material/Alert/Alert'
import Stack from '@mui/material/Stack/Stack'

import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { modalDataSelector } from '../../redux/selectors/selectors'
import { setModalState } from '../../redux/actions/actionCreators/actionCreators'

import '../form/Form.scss'

export const CustomAlert: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { isOpened } = useAppSelector(modalDataSelector)

  const toggleModal = useCallback(() => {
    dispatch(setModalState(!isOpened))
  }, [isOpened])

  return (
    <div className="alert__div">
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert onClose={toggleModal}>Operation success!</Alert>
      </Stack>
    </div>
  )
}

export default CustomAlert
