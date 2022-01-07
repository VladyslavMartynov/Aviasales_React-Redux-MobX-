import * as React from 'react'
import { useCallback } from 'react'
import { observer } from 'mobx-react'
import modalStore from '../../mobX/store/ModalStore'
import Alert from '@mui/material/Alert/Alert'
import Stack from '@mui/material/Stack/Stack'

import '../form/Form.scss'

export const CustomAlert: React.FC = observer(
  (): JSX.Element => {
    const { isOpened } = modalStore

    const toggleModal = useCallback(() => {
      modalStore.toggleModal(!isOpened)
    }, [isOpened])

    return (
      <div className="alert__div">
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert onClose={toggleModal}>Operation success!</Alert>
        </Stack>
      </div>
    )
  }
)

export default CustomAlert
