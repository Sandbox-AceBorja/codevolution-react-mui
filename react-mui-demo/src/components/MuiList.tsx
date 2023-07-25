import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiList = () => {
  return (
    <Box sx={{ width: `400px`, bgcolor: `#efefef` }}>
      <List>
        <ListItem disablePadding={true}>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar
                  src={`https://randomuser.me/api/portraits/men/80.jpg`}
                  alt={`John Doe`}
                >
                  <MailIcon color={`success`} />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>

            <ListItemText
              primary={`List item 1`}
              secondary={`Secondary text`}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding={true}>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar
                  src={`https://randomuser.me/api/portraits/men/78.jpg`}
                  alt={`John Doe`}
                >
                  <MailIcon color={`success`} />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary={`List item 2`}
              secondary={`Secondary text`}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding={true}>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar
                  src={`https://randomuser.me/api/portraits/women/79.jpg`}
                  alt={`John Doe`}
                >
                  <MailIcon color={`success`} />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary={`List item 3`}
              secondary={`Secondary text`}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}
