import { useState } from "react";
import { calendar, events } from "./types/types";
import CalendarContext from "./store";

import classes from "./calendar.module.css";
import { CssBaseline, Box, Container } from "@mui/material";

import GridCalendar from "./gridCalendar/GridCalendar";
import HeaderCalendar from "./headerCalendar/HeaderCalendar";
import Navigation from "./navigation/Navigation";

const Calendar = (props: calendar) => {
  const year = props.year || new Date().getFullYear();
  const month = props.month || new Date().getMonth();
  const defaultDate = new Date(year, month - 1);
  const [visibleDate, setVisibleDate] = useState(defaultDate);
  const [eventInModal, setEventInModal] = useState<events | null>(null);

  const [events, setEvents] = useState(props.events || null);

  return (
    <CalendarContext.Provider value={{ events: events }}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{ bgcolor: "#fff", height: "35rem", width: "50rem" }}
          className={classes.calendar}
        >
          <Navigation date={date} currentDate={defaultDate} setDate={setDate} />
          <HeaderCalendar />
          <GridCalendar
            date={date}
            actualDate={date}
            setEventInModal={setEventInModal}
          />
        </Box>
      </Container>
    </CalendarContext.Provider>
  );
};

export default Calendar;
