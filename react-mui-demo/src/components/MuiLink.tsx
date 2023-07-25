import { Stack, Link, Typography } from '@mui/material'

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={`row`} m={4}>
      <Link href='#' color={`error`} underline={`always`}>
        Link
      </Link>
      <Link href='#' variant={`body2`} color={`primary`} underline={`hover`}>
        Primary
      </Link>
      <Typography variant={`h6`}>
        <Link href='#' color={`secondary`} underline={`none`}>
          Secondary
        </Link>
      </Typography>
    </Stack>
  )
}
