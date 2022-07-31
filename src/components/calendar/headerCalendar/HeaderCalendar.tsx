import classes from "./headerCalendar.module.css";
import { DAYS } from "../utils/constants";
const HeaderCalendar = () => {
  return (
    <>
      {DAYS.map((day, index) => (
        <div key={index} className={classes.day}>
          {day}
        </div>
      ))}
    </>
  );
};

export default HeaderCalendar;
