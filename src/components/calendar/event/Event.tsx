import { useContext } from "react";
import CalendarCtx from "../context/calendarContext";
import Modal from "../UI/Modal";

const Event = () => {
  const { handleEventDisplayed, handleModalOpenClose, eventDisplayed } =
    useContext(CalendarCtx);
  if (!eventDisplayed) {
    return <p>No hay evento disponible</p>;
  }
  return (
    <Modal
      onClose={() => handleModalOpenClose()}
      title={`${eventDisplayed.name} (${eventDisplayed.type})`}
      className="eventModal"
    >
      <p>
        From <b>{eventDisplayed.dateFrom}</b> to <b>{eventDisplayed.dateTo}</b>
      </p>
      <p>{eventDisplayed.description}</p>

      <button>Change this event</button>

      <button>Delete this event</button>
    </Modal>
  );
};

export default Event;
