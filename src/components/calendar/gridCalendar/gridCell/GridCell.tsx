import EventLabel from "../eventLabel/EventLabel";
import { gridCell } from "../../utils/types";
import classes from "./gridCell.module.css";

const GridCell = (props: gridCell) => {
  return (
    <div
      className={`${classes.cell} 
	${
    props.date.date.getTime() === props.currentDate.getTime()
      ? classes.current
      : ""
  }
	${
    props.date.date.getMonth() !== props.displayedDate.getMonth()
      ? classes.otherMonth
      : ""
  }`}
    >
      <div className={classes.date}>{props.date.date.getDate()}</div>
      {props.date.events.map((event, index) => (
        <EventLabel key={index} event={event} />
      ))}
    </div>
  );
};

export default GridCell;
