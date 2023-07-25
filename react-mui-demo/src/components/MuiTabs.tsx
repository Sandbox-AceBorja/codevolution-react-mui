import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const MuiTabs = () => {
  const [value, setValue] = useState(`1`)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: `divider` }}>
          <TabList
            aria-label={`Tabs example`}
            onChange={handleChange}
            textColor={`secondary`}
            indicatorColor={`secondary`}
            variant={`scrollable`}
            scrollButtons={`auto`}
          >
            <Tab
              label={`Tab One`}
              value={`1`}
              icon={<FavoriteIcon />}
              iconPosition={`start`}
            />
            <Tab label={`Tab Two`} value={`2`} />
            <Tab label={`Tab Three`} value={`3`} disabled={true} />
            <Tab label={`Tab 4`} value={`4`} />
            <Tab label={`Tab 5`} value={`5`} />
            <Tab label={`Tab 6`} value={`6`} />
          </TabList>
        </Box>
        <TabPanel value={`1`}>Panel One</TabPanel>
        <TabPanel value={`2`}>Panel Two</TabPanel>
        <TabPanel value={`3`}>Panel Three</TabPanel>
        <TabPanel value={`4`}>Panel 4</TabPanel>
        <TabPanel value={`5`}>Panel 5</TabPanel>
        <TabPanel value={`6`}>Panel 6</TabPanel>
      </TabContext>
    </Box>
  )
}
