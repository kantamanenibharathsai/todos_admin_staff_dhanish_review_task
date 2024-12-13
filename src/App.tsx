// import React from 'react'
// import Home from './pages/home/Home'

// function App() {
//   return (
//     <Home/>
//   )
// }

// export default App


// Calendar.tsx
import React, { useState } from 'react';
import "./calendar.css"
const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days: string[] = [];
  while (date.getMonth() === month) {
    days.push(date.getDate().toString());
    date.setDate(date.getDate() + 1);
  }
  return days;
};

// Utility function to get the first day of the month (0 = Sunday, 6 = Saturday)
const getFirstDayOfMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  return date.getDay();
};

// Utility function to get a range of years (e.g., from 2000 to 2050)
const getYearsRange = (start: number, end: number) => {
  const years: number[] = [];
  for (let year = start; year <= end; year++) {
    years.push(year);
  }
  return years;
};

// Utility function to format a number to two digits
const formatDate = (date: number) => (date < 10 ? `0${date}` : date.toString());

const App: React.FC = () => {
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);

  // Get the days of the current month and the first day of the month
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Get the previous and next month
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Create an array to fill the calendar grid
  const calendarDays = Array.from({ length: 42 }, (_, i) => {
    const dayIndex = i - firstDay;
    if (dayIndex >= 0 && dayIndex < daysInMonth.length) {
      return daysInMonth[dayIndex];
    } else {
      return null;
    }
  });

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Year range from 1900 to the current year + 10
  const years = getYearsRange(1900, currentYear + 10);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPrevMonth} className="nav-button">{"<"}</button>
        
        <div className="month-year">
          <div
            className="month-selector"
            onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
          >
            {monthNames[currentMonth]}
          </div>
          <div
            className="year-selector"
            onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
          >
            {currentYear}
          </div>
        </div>

        <button onClick={goToNextMonth} className="nav-button">{">"}</button>
      </div>

      {/* Month Dropdown */}
      {isMonthDropdownOpen && (
        <div className="dropdown month-dropdown">
          {monthNames.map((month, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => {
                setCurrentMonth(index);
                setIsMonthDropdownOpen(false);
              }}
            >
              {month}
            </div>
          ))}
        </div>
      )}

      {/* Year Dropdown */}
      {isYearDropdownOpen && (
        <div className="dropdown year-dropdown">
          {years.map((year) => (
            <div
              key={year}
              className="dropdown-item"
              onClick={() => {
                setCurrentYear(year);
                setIsYearDropdownOpen(false);
              }}
            >
              {year}
            </div>
          ))}
        </div>
      )}

      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="day-name">{day}</div>
        ))}
        {calendarDays.map((day, index) => (
          <div key={index} className={`day ${day ? 'has-day' : ''}`}>
            {day ? day : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
