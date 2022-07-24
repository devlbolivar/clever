import classes from "./headerCalendar.module.css";
const HeaderCalendar = () => {
  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  return (
    <>
      {days.map((day) => (
        <div className={classes.day}>{day}</div>
      ))}
    </>
  );
};

export default HeaderCalendar;
