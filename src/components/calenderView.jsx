import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US"; // ✅ Corrected import
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS, // ✅ Use the imported `enUS` locale
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView = ({ tasks }) => {
  const events = tasks.map((task) => ({
    title: task.text,
    start: new Date(task.date),
    end: new Date(task.date),
  }));

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default CalendarView;
