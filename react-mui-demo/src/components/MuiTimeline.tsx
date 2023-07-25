import { Box } from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab'

export const MuiTimeline = () => {
  return (
    <Timeline position={`right`}>
      <TimelineItem>
        <TimelineOppositeContent color={`primary`}>
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={`secondary`} variant={`outlined`} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color={`primary`}>
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={`secondary`} variant={`outlined`} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color={`primary`}>
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color={`secondary`} variant={`outlined`} />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
