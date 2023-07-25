import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import DoDisturbIcon from '@mui/icons-material/DoDisturb'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from 'react'

export const MuiButton = () => {
  // const [formats, setFormats] = useState<string[]>([])
  const [formats, setFormats] = useState<string | null>(null)
  console.log({ formats })

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    // updatedFormats: string[]
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats)
  }

  return (
    <Stack spacing={4}>
      <Stack
        spacing={2}
        direction={`row`}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Button variant={`text`} color={`primary`}>
          Primary
        </Button>
        <Button variant={`text`} color={`secondary`}>
          Secondary
        </Button>
        <Button variant={`text`} color={`error`}>
          Error
        </Button>
        <Button variant={`text`} color={`warning`}>
          Warning
        </Button>
        <Button variant={`text`} color={`info`}>
          Info
        </Button>
        <Button variant={`text`} color={`success`}>
          Success
        </Button>
      </Stack>

      <Stack
        spacing={2}
        direction={`row`}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Button variant={`contained`} color={`primary`}>
          Primary
        </Button>
        <Button variant={`contained`} color={`secondary`}>
          Secondary
        </Button>
        <Button variant={`contained`} color={`error`}>
          Error
        </Button>
        <Button variant={`contained`} color={`warning`}>
          Warning
        </Button>
        <Button variant={`contained`} color={`info`}>
          Info
        </Button>
        <Button variant={`contained`} color={`success`}>
          Success
        </Button>
      </Stack>

      <Stack
        spacing={2}
        direction={`row`}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Button variant={`outlined`} color={`primary`}>
          Primary
        </Button>
        <Button variant={`outlined`} color={`secondary`}>
          Secondary
        </Button>
        <Button variant={`outlined`} color={`error`}>
          Error
        </Button>
        <Button variant={`outlined`} color={`warning`}>
          Warning
        </Button>
        <Button variant={`outlined`} color={`info`}>
          Info
        </Button>
        <Button variant={`outlined`} color={`success`}>
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction={`row`} display={`block`}>
        <Button variant={`contained`} size={`small`}>
          Small
        </Button>
        <Button variant={`contained`} size={`medium`}>
          Medium
        </Button>
        <Button variant={`contained`} size={`large`}>
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction={`row`}>
        <Button
          variant={`contained`}
          startIcon={<SendIcon />}
          onClick={() => alert(`Sent`)}
        >
          Send
        </Button>
        <Button
          variant={`outlined`}
          color={`warning`}
          startIcon={<DoDisturbIcon />}
        >
          Cancel
        </Button>
        <IconButton aria-label={`send`} color={`success`} size={`small`}>
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={`row`}>
        <ButtonGroup
          variant={`contained`}
          orientation={`vertical`}
          size={`small`}
          color={`success`}
          aria-label={`alignment-button-group`}
        >
          <Button onClick={() => alert(`Left clicked`)}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={`row`}>
        <ToggleButtonGroup
          aria-label={`text formatting`}
          value={formats}
          onChange={handleFormatChange}
          size={`small`}
          color={`warning`}
          orientation={`vertical`}
          exclusive={true}
        >
          <ToggleButton value={`bold`} aria-label={`bold`}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={`italic`} aria-label={`italic`}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={`underlined`} aria-label={`underlined`}>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}
