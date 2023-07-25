import { Stack, TextField, InputAdornment } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useState } from 'react'

export const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction={`row`} spacing={2}>
        <TextField label={`Name`} variant={`outlined`} />
        <TextField label={`Name`} variant={`filled`} />
        <TextField label={`Name`} variant={`standard`} />
      </Stack>
      <Stack direction={`row`} spacing={2}>
        <TextField label={`Small success`} size={`small`} color={`success`} />
      </Stack>
      <Stack direction={`row`} spacing={2}>
        <TextField
          label={`Username`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={true}
          error={!value}
          InputProps={{
            endAdornment: (
              <InputAdornment position={`end`}>
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label={`Password`}
          type={`password`}
          helperText={`Do not share your password`}
          required={true}
          error={true}
          InputProps={{
            endAdornment: (
              <InputAdornment position={`end`}>
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField label={`Read only`} InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={`row`} spacing={2}>
        <TextField
          label={`Amount`}
          InputProps={{
            startAdornment: (
              <InputAdornment position={`start`}>$</InputAdornment>
            ),
          }}
        />
        <TextField
          label={`Weight`}
          InputProps={{
            endAdornment: <InputAdornment position={`end`}>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  )
}
