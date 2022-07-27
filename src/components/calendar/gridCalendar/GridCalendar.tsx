import GridCell from "./gridCell/GridCell";
import { gridCalendarProps, events } from "../types/types";
import { toStartOfDay } from "../utils";
import classes from "./gridCalendar.module.css";

const GridCalendar = ({ date, actualDate, events }: gridCalendarProps) => {
  const currentDate = toStartOfDay(new Date().toString());

  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  startDate.setDate(startDate.getDate() - (startDate.getDay() - 1));

  const dates = [];

  const findEventsForDate = (events: events[], date: Date) => {
    const dateTime = date.getTime();

    return events.filter((event) => {
      const eventFromTime = toStartOfDay(event.dateFrom).getTime();
      const eventToTime = toStartOfDay(event.dateTo).getTime();

      return dateTime >= eventFromTime && dateTime <= eventToTime;
    });
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
            actualDate={actualDate}
          />
        );
      })}
    </>
  );
};

export default GridCalendar;
