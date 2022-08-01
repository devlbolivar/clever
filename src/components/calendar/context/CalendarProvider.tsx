import { useState, useMemo } from "react";
import CalendarCtx from "./calendarContext";
import { calendarProvider, event } from "../utils/types";

const CalendarProvider: React.FC<calendarProvider> = (props) => {
  const [events, setEvents] = useState<event[] | []>(props.events || []);
  const [eventDisplayed, setEventDisplayed] = useState<event>();
  const [displayedDate, setDisplayedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    eventDisplayed,
    handleEventDisplayed: (event: event) => setEventDisplayed(event),
    isModalOpen,
    handleModalOpenClose: () => setIsModalOpen((prevModal) => !prevModal),
  };

  return (
    <CalendarCtx.Provider value={state}>{props.children}</CalendarCtx.Provider>
  );
};

export default CalendarProvider;
