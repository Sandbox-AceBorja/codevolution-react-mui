import {
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'
import { useState } from 'react'

export const MuiDialog = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby={`dialog-title`}
        aria-describedby={`dialog-description`}
      >
        <DialogTitle id={`dialog-title`}>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id={`dialog-description`}>
            Are you sure you want to submit the test? You will not be able to
            edit after submitting
          </DialogContentText>
          <Stack direction={`row-reverse`} mt={4}>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
            <DialogActions>
              <Button autoFocus={true} onClick={() => setOpen(false)}>
                Submit
              </Button>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
