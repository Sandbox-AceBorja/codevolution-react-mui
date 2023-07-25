import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker'
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker'

export const MuiDatePicker = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'))
  console.log({ value })
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'TimePicker',
          'MobileTimePicker',
          'DesktopTimePicker',
          'StaticTimePicker',
        ]}
      >
        <DemoItem label='Desktop variant'>
          <DesktopTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        <DemoItem label='Mobile variant'>
          <MobileTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        <DemoItem label='Responsive variant'>
          <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        <DemoItem label='Static variant'>
          <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
      </DemoContainer>

      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label='Basic time picker' />
      </DemoContainer>

      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label='Basic date time picker' />
      </DemoContainer>
    </LocalizationProvider>
  )
}
