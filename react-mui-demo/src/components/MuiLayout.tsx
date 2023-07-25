import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: `32px` }} elevation={4}>
      <Stack
        sx={{ border: `1px solid` }}
        direction={`row-reverse`}
        spacing={2}
        divider={<Divider orientation={`vertical`} flexItem={true} />}
      >
        <Box
          sx={{
            backgroundColor: 'success.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'success.light',
            },
          }}
        >
          SandBox
        </Box>
        <Box
          display={'flex'}
          height={'100px'}
          width={'100px'}
          bgcolor={'primary.main'}
          color={`white`}
          p={2}
        >
          SandBox
        </Box>
      </Stack>
      <Grid container={true} my={4} rowSpacing={2} columnSpacing={3}>
        <Grid item={true} xs={12} sm={3}>
          <Box bgcolor={`primary.light`} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item={true} xs={12} sm={9}>
          <Box bgcolor={`secondary.light`} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item={true} xs={12} sm={9}>
          <Box bgcolor={`warning.light`} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item={true} xs={12} sm={3}>
          <Box bgcolor={`error.light`} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
