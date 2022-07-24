import classes from "./navigation.module.css";

import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

interface props {
  date: Date;
}

const Navigation = ({ date }: props) => {
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

  return (
    <div className={classes.navigation}>
      <div className={classes.backwardForwardButtons}>
        <ListItemIcon>
          <SkipPreviousIcon />

          <SkipNextIcon />
        </ListItemIcon>
      </div>
      <div className={classes.monthYear}>
        {months[date.getMonth()]} {date.getFullYear()}
      </div>
      <div className={classes.calendarTypesButton}>
        <Button variant="contained" size="small">
          Mes
        </Button>
        <Button variant="contained" size="small">
          Semana
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
