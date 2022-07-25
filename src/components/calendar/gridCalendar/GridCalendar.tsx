import classes from "./gridCalendar.module.css";

interface props {
  date: Date;
  currentDate: Date;
}

const toStartOfDay = (date: Date) => {
  const newDate = new Date(date);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
};

const GridCalendar = ({ date, currentDate: actualDate }: props) => {
  const currentDate = toStartOfDay(new Date());

  const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
  startDate.setDate(startDate.getDate() - (startDate.getDay() - 1));

  const dates = [];

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    dates.push({ date, events: [] });
    startDate.setDate(date.getDate() + 1);
  }

  return (
    <>
      {dates.map((date, index) => {
        return (
          <div
            key={index}
            className={`${classes.cell} 
        ${date.date.getTime() === currentDate.getTime() ? classes.current : ""}
        ${
          date.date.getMonth() !== actualDate.getMonth()
            ? classes.otherMonth
            : ""
        }`}
          >
            <div className={classes.date}>{date.date.getDate()}</div>
          </div>
        );
      })}
    </>
  );
};

export default GridCalendar;
