import CalendarProvider from "./context/CalendarProvider";

import { calendar } from "./utils/types";

import classes from "./calendar.module.css";
import { CssBaseline, Box, Container } from "@mui/material";

import GridCalendar from "./gridCalendar/GridCalendar";
import HeaderCalendar from "./headerCalendar/HeaderCalendar";
import Navigation from "./navigation/Navigation";

const Calendar = (props: calendar) => {
  return (
    <CalendarProvider events={props.events}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{ bgcolor: "#fff", height: "35rem", width: "50rem" }}
          className={classes.calendar}
        >
          <Navigation />
          <HeaderCalendar />
          <GridCalendar />
        </Box>
      </Container>
    </CalendarProvider>
  );
};

export default Calendar;
