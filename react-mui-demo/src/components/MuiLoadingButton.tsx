import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction={`row`}>
      <LoadingButton variant={`outlined`}>Submit</LoadingButton>
      <LoadingButton variant={`outlined`} loading={true}>
        Submit
      </LoadingButton>

      <LoadingButton variant={`outlined`} loadingIndicator={`Loading`}>
        Fetching Data
      </LoadingButton>
      <LoadingButton
        variant={`outlined`}
        loadingIndicator={`Loading`}
        loading={true}
      >
        Fetching Data
      </LoadingButton>

      <LoadingButton
        variant={`outlined`}
        loadingPosition={`start`}
        startIcon={<SaveIcon />}
        loading={true}
      >
        Save
      </LoadingButton>

      <LoadingButton
        variant={`outlined`}
        loadingPosition={`start`}
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
    </Stack>
  )
}
