import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from '@mui/lab/TimelineItem'
import Typography from "@mui/material/Typography";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

export default function BasicTimeline() {
  return (
    <Timeline  sx={{
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: "10px", px: 2 }}>
          <Typography variant="body2" component="span">
            7:30am
          </Typography>
          <Typography
            variant="p"
            component="span"
            sx={{ p: "12px" }}
            display={"grid"}
            gridTemplateColumns={"repeat(auto-fit, 10em)"}
            justifyContent={"space-between"}
            gap={"10px"}
            bgcolor="#f5f5f5"
          >
           <span >
              <h2 className="font-semibold text-lg">Consultation</h2> <p className="text-sm text-gray-400">7:30am - 8:30am</p>
            </span>
            <span>
              <h2 className="text-gray-400 text-lg">Cost: $100</h2>
            </span>
            <span>
              <h2 className="text-lg font-semibold">Taylor Swift</h2>
            </span>
            <span className="flex gap-2 items-center">
            <CircleRoundedIcon sx={{fontSize: 12}}  className="text-lime-600"/>
              <h2 className="text-gray-400">Confirmed</h2>
            </span>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: "10px", px: 2 }}>
          <Typography variant="body2" component="span">
            8:30am
          </Typography>
          <Typography
            variant="p"
            component="span"
            sx={{ p: "12px" }}
            display={"grid"}
            gridTemplateColumns={"repeat(auto-fit, 10em)"}
            justifyContent={"space-between"}
            gap={"10px"}
            bgcolor="#f5f5f5"
          >
           <span >
              <h2 className="font-semibold text-lg">Consultation</h2> <p className="text-sm text-gray-400">8:30am - 9:30am</p>
            </span>
            <span>
              <h2 className="text-gray-400 text-lg">Cost: $100</h2>
            </span>
            <span>
              <h2 className="text-lg font-semibold">Anna Sergeeva</h2>
            </span>
            <span className="flex gap-2 items-center">
            <CircleRoundedIcon sx={{fontSize: 12}}  className="text-lime-600"/>
              <h2 className="text-gray-400">Confirmed</h2>
            </span>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ pb: "10px", px: 2 }}>
          <Typography variant="body2" component="span">
            9:30am
          </Typography>
          <Typography
            variant="p"
            component="span"
            sx={{ p: "12px" }}
            display={"grid"}
            gridTemplateColumns={"repeat(auto-fit, 10em)"}
            justifyContent={"space-between"}
            gap={"10px"}
            bgcolor="#f5f5f5"
          >
           <span >
              <h2 className="font-semibold text-lg">Consultation</h2> <p className="text-sm text-gray-400">9:30am - 10:30am</p>
            </span>
            <span>
              <h2 className="text-gray-400 text-lg">Cost: $100</h2>
            </span>
            <span>
              <h2 className="text-lg font-semibold">Peter Parker</h2>
            </span>
            <span className="flex gap-2 items-center">
            <CircleRoundedIcon sx={{fontSize: 12}}  className="text-lime-600"/>
              <h2 className="text-gray-400">Confirmed</h2>
            </span>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator></TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
}
