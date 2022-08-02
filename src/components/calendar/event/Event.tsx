import { useContext } from "react";
import CalendarCtx from "../context/calendarContext";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import SquareIcon from "@mui/icons-material/Square";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotesIcon from "@mui/icons-material/Notes";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Event = () => {
  const { handleEventDisplayed, handleModalOpenClose, eventDisplayed } =
    useContext(CalendarCtx);
  if (!eventDisplayed) {
    return <p>No hay evento disponible</p>;
  }

  return (
    <Dialog
      onClose={() => {
        handleModalOpenClose();
      }}
      open={true}
    >
      <DialogTitle>
        <IconButton
          aria-label="settings"
          sx={{
            position: "absolute",
            right: 50,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <IconButton
          aria-label="close"
          onClick={() => {
            handleModalOpenClose();
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <SquareIcon color="success" />
            </ListItemIcon>
            <DialogContentText>
              <Typography variant="h5" gutterBottom component="div">
                {eventDisplayed.name}
              </Typography>
            </DialogContentText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <NotesIcon />
            </ListItemIcon>
            <DialogContentText>{eventDisplayed.description}</DialogContentText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <DialogContentText>
              From: {eventDisplayed.dateFrom} To: {eventDisplayed.dateTo}
            </DialogContentText>
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default Event;
