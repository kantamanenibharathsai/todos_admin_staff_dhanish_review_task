import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TaskRow } from "../utils/TypescriptData";
import customCalendarStyles from "./CustomCalendarStyles";

const years = Array.from({ length: 2031 - 2020 + 1 }, (_, i) => 2020 + i);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

interface Props {
  staffRowsData: TaskRow[];
  selectedStaffPerson: string;
  selectedTasksCardsHandler: (tasks: TaskRow[]) => void;
}

const CustomCalendar: React.FC<Props> = ({
  staffRowsData,
  selectedStaffPerson,
  selectedTasksCardsHandler,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [yearAnchorEl, setYearAnchorEl] = useState<null | HTMLElement>(null);
  const [monthAnchorEl, setMonthAnchorEl] = useState<null | HTMLElement>(null);
  const [taskDates, setTaskDates] = useState<string[]>([]);
  const currentYear = selectedDate.getFullYear();
  const currentMonth = selectedDate.getMonth();

  useEffect(() => {
    if (selectedStaffPerson) {
      const dates = staffRowsData
        .filter(
          (row) => row.staffName === selectedStaffPerson && row.createdDate
        )
        .map((row) => {
          const date = new Date(row.createdDate);
          return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
            2,
            "0"
          )}-${String(date.getDate()).padStart(2, "0")}`;
        });
      setTaskDates(dates);
    }
  }, [selectedStaffPerson, staffRowsData]);

  const openYearMenu: React.MouseEventHandler<HTMLElement> = (event) =>
    setYearAnchorEl(event.currentTarget);

  const openMonthMenu: React.MouseEventHandler<HTMLElement> = (event) =>
    setMonthAnchorEl(event.currentTarget);

  const closeYearMenu = () => setYearAnchorEl(null);
  const closeMonthMenu = () => setMonthAnchorEl(null);

  const handleYearSelect = (year: number) => {
    setSelectedDate(new Date(year, currentMonth, 1));
    closeYearMenu();
  };

  const handleMonthSelect = (monthIndex: number) => {
    setSelectedDate(new Date(currentYear, monthIndex, 1));
    closeMonthMenu();
  };

  const handleMonthChange = (direction: "prev" | "next") => {
    selectedTasksCardsHandler([]);
    setSelectedDate((prevDate) => {
      const newMonth =
        direction === "prev"
          ? prevDate.getMonth() - 1
          : prevDate.getMonth() + 1;
      return new Date(prevDate.getFullYear(), newMonth, 1);
    });
  };

  const handleDateClick = (day: number) => {
    const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;
    setSelectedDate(new Date(currentYear, currentMonth, day));

    const tasksForDate = staffRowsData.filter(
      (task) =>
        task.staffName === selectedStaffPerson &&
        task.createdDate.startsWith(formattedDate)
    );
    selectedTasksCardsHandler(tasksForDate);
  };

  const renderCalendarDays = () => {
    const days = daysInMonth(currentYear, currentMonth);

    return Array.from({ length: days }, (_, i) => {
      const day = i + 1;
      const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      const isPreselected = taskDates.includes(formattedDate);

      return (
        <Grid item xs={2} key={i} sx={customCalendarStyles.gridCont}>
          <Button
            variant="outlined"
            style={customCalendarStyles.dayButton(isPreselected)}
            disabled={!isPreselected}
            onClick={() => handleDateClick(day)}
            sx={{
              minWidth: "20px",
              height: "20px",
              paddingLeft: 0,
              paddingRight: 0,
              backgroundColor: isPreselected ? "green" : "#f0f0f0",
              color: isPreselected ? "white" : "#888",
              borderColor: isPreselected ? "green" : "#dcdcdc",
              "&:hover": {
                backgroundColor: isPreselected ? "darkgreen" : "#e0e0e0",
              },
            }}
          >
            {day}
          </Button>
        </Grid>
      );
    });
  };

  return (
    <Box style={customCalendarStyles.container}>
      <Box style={customCalendarStyles.header}>
        <Typography variant="h6" style={customCalendarStyles.textBlack}>
          Calendar
        </Typography>
        <Box style={customCalendarStyles.flexCenter}>
          <Button
            variant="text"
            onClick={openYearMenu}
            style={customCalendarStyles.yearButton}
          >
            {currentYear}
          </Button>
          <Menu
            anchorEl={yearAnchorEl}
            open={Boolean(yearAnchorEl)}
            onClose={closeYearMenu}
            PaperProps={{ style: customCalendarStyles.menuPaper }}
          >
            {years.map((year) => (
              <MenuItem key={year} onClick={() => handleYearSelect(year)}>
                {year}
              </MenuItem>
            ))}
          </Menu>
          <IconButton
            onClick={() => handleMonthChange("prev")}
            style={customCalendarStyles.iconButton}
          >
            <ArrowBack />
          </IconButton>
          <Button
            variant="text"
            onClick={openMonthMenu}
            style={customCalendarStyles.yearButton}
          >
            {months[currentMonth]}
          </Button>
          <Menu
            anchorEl={monthAnchorEl}
            open={Boolean(monthAnchorEl)}
            onClose={closeMonthMenu}
            PaperProps={{ style: customCalendarStyles.menuPaper }}
          >
            {months.map((month, index) => (
              <MenuItem key={month} onClick={() => handleMonthSelect(index)}>
                {month}
              </MenuItem>
            ))}
          </Menu>
          <IconButton
            onClick={() => handleMonthChange("next")}
            style={customCalendarStyles.iconButton}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {renderCalendarDays()}
      </Grid>
    </Box>
  );
};

export default CustomCalendar;
