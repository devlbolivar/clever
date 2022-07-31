import { eventLabel } from "../../utils/types";
import classes from "./eventLabel.module.css";

const EventLabel = (props: eventLabel) => {
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
