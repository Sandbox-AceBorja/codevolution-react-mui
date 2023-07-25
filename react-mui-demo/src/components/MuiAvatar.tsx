import { Stack, Avatar, AvatarGroup } from '@mui/material'

export const MuiAvatar = () => {
  return (
    <Stack spacing={2}>
      <Stack direction={`row`} spacing={1}>
        <Avatar sx={{ bgcolor: `primary.light` }}>BW</Avatar>
        <Avatar sx={{ bgcolor: `success.light` }}>CK</Avatar>
      </Stack>
      <Stack direction={`row`} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src={`https://randomuser.me/api/portraits/women/79.jpg`}
            alt={`Jane Doe`}
          />
          <Avatar
            src={`https://randomuser.me/api/portraits/men/79.jpg`}
            alt={`John Doe`}
          />
          <Avatar
            src={`https://randomuser.me/api/portraits/women/49.jpg`}
            alt={`Jane Doe`}
          />
          <Avatar
            src={`https://randomuser.me/api/portraits/men/49.jpg`}
            alt={`John Doe`}
          />
        </AvatarGroup>
      </Stack>
      <Stack direction={`row`} spacing={1}>
        <Avatar sx={{ bgcolor: `primary.light`, width: 48, height: 48 }}>
          BW
        </Avatar>
        <Avatar sx={{ bgcolor: `success.light`, width: 48, height: 48 }}>
          CK
        </Avatar>
      </Stack>
    </Stack>
  )
}
