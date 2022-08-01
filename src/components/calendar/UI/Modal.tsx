import { modal } from "../utils/types";
import classes from "./modal.module.css";

const Modal: React.FC<modal> = ({ children, onClose, title, className }) => {
  return (
    <>
      <div className={classes.overlay} onClick={onClose} />
      <div className={`${classes.modal} ${className}`}>
        <h3>{title}</h3>
        <div className={classes.inner}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
