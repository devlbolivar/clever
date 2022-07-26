import EventLabel from "../eventLabel/EventLabel";
import { gridCellProps } from "../../types/types";
import classes from "./gridCell.module.css";

const GridCell = (props: gridCellProps) => {
  return (
    <div
      className={`${classes.cell} 
	${
    props.date.date.getTime() === props.currentDate.getTime()
      ? classes.current
      : ""
  }
	${
    props.date.date.getMonth() !== props.actualDate.getMonth()
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
