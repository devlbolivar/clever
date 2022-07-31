import { useContext, useEffect, useState } from "react";
import CalendarCtx from "../context/calendarContext";
import { MONTHS } from "../utils/constants";
import classes from "./navigation.module.css";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Navigation = () => {
  const {
    onBackwardDate,
    onForwardDate,
    onCurrentDate,
    displayedDate,
    currentDate,
  } = useContext(CalendarCtx);

  const [isCurrentDate, setIsCurrentDate] = useState(false);

  useEffect(() => {
    if (
      displayedDate.getFullYear() === currentDate.getFullYear() &&
      displayedDate.getMonth() === currentDate.getMonth()
    ) {
      setIsCurrentDate(true);
    } else {
      setIsCurrentDate(false);
    }
  }, [displayedDate, currentDate]);

  return (
    <div className={classes.navigation}>
      <div className={classes.backwardForwardButtons}>
        <IconButton onClick={onBackwardDate}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={onForwardDate}>
          <SkipNextIcon />
        </IconButton>
        <Button
          variant="contained"
          onClick={onCurrentDate}
          disabled={isCurrentDate}
        >
          Hoy
        </Button>
      </div>
      <div className={classes.monthYear}>
        {MONTHS[displayedDate.getMonth()]} {displayedDate.getFullYear()}
      </div>
      <div className={classes.calendarTypesButton}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>Mes</Button>
          <Button>Semana</Button>
          <Button>Día</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Navigation;
