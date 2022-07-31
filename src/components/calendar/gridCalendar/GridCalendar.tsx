import { useContext } from "react";
import GridCell from "./gridCell/GridCell";
import { gridCalendar, event } from "../utils/types";
import { toStartOfDay } from "../utils";
import classes from "./gridCalendar.module.css";
import CalendarCtx from "../context/calendarContext";

const GridCalendar = () => {
  const { displayedDate, events } = useContext(CalendarCtx);

  const currentDate = toStartOfDay(new Date().toString());

  const startDate = new Date(
    displayedDate.getFullYear(),
    displayedDate.getMonth(),
    1
  );
  startDate.setDate(startDate.getDate() - (startDate.getDay() - 1));

  const dates = [];

  const findEventsForDate = (events: event[] | null, date: Date) => {
    const dateTime = date.getTime();

    const eventsFounded = events?.filter((event) => {
      const eventFromTime = toStartOfDay(event.dateFrom).getTime();
      const eventToTime = toStartOfDay(event.dateTo).getTime();

      return dateTime >= eventFromTime && dateTime <= eventToTime;
    });
    if (eventsFounded) {
      return eventsFounded;
    }
    return [];
  };

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    dates.push({ date, events: findEventsForDate(events, date) });
    startDate.setDate(date.getDate() + 1);
  }

  return (
    <>
      {dates.map((date, index) => {
        return (
          <GridCell
            key={index}
            date={date}
            currentDate={currentDate}
            displayedDate={displayedDate}
          />
        );
      })}
    </>
  );
};

export default GridCalendar;
