import { useState } from "react";
import classes from "./calendar.module.css";
import { CssBaseline, Box, Container } from "@mui/material";
import GridCalendar from "./gridCalendar/GridCalendar";
import HeaderCalendar from "./headerCalendar/HeaderCalendar";
import Navigation from "./navigation/Navigation";

import { calendarProps } from "./types/types";

const Calendar = (props: calendarProps) => {
  const year = props.year || new Date().getFullYear();
  const month = props.month || new Date().getMonth();
  const selectedDate = new Date(year, month);
  const [date, setDate] = useState(selectedDate);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{ bgcolor: "#fff", height: "35rem", width: "50rem" }}
          className={classes.calendar}
        >
          <Navigation
            date={date}
            currentDate={selectedDate}
            setDate={setDate}
          />
          <HeaderCalendar />
          <GridCalendar date={date} currentDate={date} events={props.events} />
        </Box>
      </Container>
    </>
  );
};

export default Calendar;
