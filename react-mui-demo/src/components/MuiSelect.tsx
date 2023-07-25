import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

export const MuiSelect = () => {
  // const [country, setCountry] = useState('') // single select
  const [countries, setCountries] = useState<string[]>([])
  console.log({ countries })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setCountry(event.target.value as string) // single select
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }
  return (
    <Box width={`250px`}>
      <TextField
        label={`Select country`}
        select={true}
        value={countries}
        onChange={handleChange}
        fullWidth={true}
        SelectProps={{
          multiple: true,
        }}
        size={`small`}
        color={`success`}
        helperText={`Please select your country`}
        required={true}
        error={!countries[0]}
      >
        <MenuItem value={`PH`}>Philippines</MenuItem>
        <MenuItem value={`US`}>USA</MenuItem>
        <MenuItem value={`AU`}>Australia</MenuItem>
      </TextField>
    </Box>
  )
}
