import { useState } from "react";
import classes from "./calendar.module.css";
import { CssBaseline, Box, Container } from "@mui/material";
import GridCalendar from "./gridCalendar/GridCalendar";
import HeaderCalendar from "./headerCalendar/HeaderCalendar";
import Navigation from "./navigation/Navigation";

const Calendar = () => {
  const year = 2022;
  const month = 7;
  const selectedDate = new Date(year, month - 1);
  const [date, setDate] = useState(selectedDate);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{ bgcolor: "#fff", height: "35rem", width: "50rem" }}
          className={classes.calendar}
        >
          <Navigation date={date} />
          <HeaderCalendar />
          <GridCalendar date={date} actualDate={date} />
        </Box>
      </Container>
    </>
  );
};

export default Calendar;
