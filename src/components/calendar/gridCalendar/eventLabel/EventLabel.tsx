import { useContext } from "react";
import CalendarCtx from "../../context/calendarContext";
import { eventLabel } from "../../utils/types";
import classes from "./eventLabel.module.css";

const EventLabel = (props: eventLabel) => {
  const { handleEventDisplayed, handleModalOpenClose } =
    useContext(CalendarCtx);
  return (
    <div
      className={`${classes.eventLabel}  ${
        props.event.type ? classes[props.event.type.toLowerCase()] : "standard"
      }`}
      onClick={() => {
        handleEventDisplayed(props.event);
        handleModalOpenClose();
      }}
    >
      {props.event.name}
    </div>
  );
};

export default EventLabel;
