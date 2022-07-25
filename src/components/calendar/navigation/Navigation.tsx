import { useState } from "react";

import classes from "./navigation.module.css";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

interface props {
  date: Date;
  currentDate: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Navigation = ({ date, currentDate, setDate }: props) => {
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const [todayIsDisabled, setTodayIsDisabled] = useState(true);

  const handleOnBackward = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - 1);
    setDate(newDate);
  };

  const handleOnForward = () => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + 1);
    setDate(newDate);
  };

  const handleOnToday = () => {
    const year = 2022;
    const month = 7;
    setDate(new Date(year, month - 1));
  };

  return (
    <div className={classes.navigation}>
      <div className={classes.backwardForwardButtons}>
        <IconButton onClick={handleOnBackward}>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={handleOnForward}>
          <SkipNextIcon />
        </IconButton>
        <Button
          variant="contained"
          onClick={handleOnToday}
          disabled={date.getMonth() === currentDate.getMonth()}
        >
          Hoy
        </Button>
      </div>
      <div className={classes.monthYear}>
        {months[date.getMonth()]} {date.getFullYear()}
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
