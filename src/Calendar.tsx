// src/Calendar.tsx
import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());

  const handleDateChange: CalendarProps['onChange'] = (value) => {
    setDate(value as Date);
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        //value={date}
      />
      <p>Selected date: {(date as Date).toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
