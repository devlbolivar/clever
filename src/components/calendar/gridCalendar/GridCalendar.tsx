import GridCell from "./gridCell/GridCell";
import { gridCalendarProps } from "../types/types";
import classes from "./gridCalendar.module.css";

const toStartOfDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
};

const GridCalendar = ({ date, currentDate: actualDate }: gridCalendarProps) => {
  const currentDate = toStartOfDay(new Date());

  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  startDate.setDate(startDate.getDate() - (startDate.getDay() - 1));

  const dates = [];

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    dates.push({ date,  events: findEventsForDate(events, date) });
    startDate.setDate(date.getDate() + 1);
  }

  return (
    <>
      {dates.map((date, index) => {
        return (
          <GridCell
            key={index}
            date={{ date.date, events }}
            currentDate={currentDate}
            actualDate={actualDate}
          />
        );
      })}
    </>
  );
};

export default GridCalendar;
