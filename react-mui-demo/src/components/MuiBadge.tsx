import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction={`row`}>
      <Badge badgeContent={5} color={`primary`}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color={`secondary`} showZero={true}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color={`success`} showZero={true}>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color={`warning`} showZero={true} max={1000}>
        <MailIcon />
      </Badge>
      <Badge
        variant={`dot`}
        badgeContent={100}
        color={`error`}
        showZero={true}
        max={1000}
      >
        <MailIcon />
      </Badge>
      <Badge variant={`dot`} color={`primary`} invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  )
}
