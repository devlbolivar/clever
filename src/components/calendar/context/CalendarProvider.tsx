import { useState, useMemo } from "react";
import CalendarCtx from "./calendarContext";
import { calendarProvider, event } from "../utils/types";

const CalendarProvider: React.FC<calendarProvider> = (props) => {
  //const [visibleDate, setVisibleDate] = useState(defaultDate);
  //const [eventInModal, setEventInModal] = useState<event>([{}]);

  const [events, setEvents] = useState<event[] | []>(props.events || []);

  const [displayedDate, setDisplayedDate] = useState(new Date());
  const currentDate = useMemo(() => new Date(), []);

  const handleOnBackward = () => {
    setDisplayedDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
    );
  };

  const handleOnForward = () => {
    setDisplayedDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1)
    );
  };

  const handleOnToday = () => {
    setDisplayedDate(currentDate);
  };

  const state = {
    events,
    addEvent: () => {},
    displayedDate: displayedDate,
    onBackwardDate: handleOnBackward,
    onForwardDate: handleOnForward,
    currentDate,
    onCurrentDate: handleOnToday,
  };

  return (
    <CalendarCtx.Provider value={state}>{props.children}</CalendarCtx.Provider>
  );
};

export default CalendarProvider;
