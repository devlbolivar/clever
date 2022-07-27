import { eventLabelProps } from "../../types/types";
import classes from "./eventLabel.module.css";

const EventLabel = (props: eventLabelProps) => {
  return (
    <div
      className={`${classes.eventLabel}  ${
        props.event.type ? classes[props.event.type.toLowerCase()] : "standard"
      }`}
    >
      {props.event.name}
    </div>
  );
};

export default EventLabel;
