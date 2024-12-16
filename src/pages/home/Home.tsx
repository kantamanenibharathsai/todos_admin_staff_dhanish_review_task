import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DatePicker, { DateObject, DatePickerRef } from "react-multi-date-picker";
import {
  staffDropDownData,
  StaffDropDownInterface,
  staticRows,
  TaskRow,
} from "../../utils/TypescriptData";
import homeStyles from "./HomeStyles";
import "react-calendar/dist/Calendar.css";
import CustomCalendar from "../../components/CustomCalendar";


const Home: React.FC = () => {
  const startDateRef = useRef<DatePickerRef | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [selectedStaff, setSelectedStaff] = useState<string>("");
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [rows, setRows] = useState<TaskRow[]>(staticRows);
  const [editingRowId, setEditingRowId] = useState<string | null>(null);
  const [isStaffBtnClicked, setIsStaffBtnClicked] = useState<boolean>(false);
  const [isAdminBtnClicked, setIsAdminBtnClicked] = useState<boolean>(true);
  const [taskDates, setTaskDates] = useState<Date[]>([]);
  const [selectedStaffPerson, setSelectedStaffPerson] =  useState<string>("");

  useEffect(() => {
    if (selectedStaff) {
      const dates = rows
        .filter((row) => row.staffName === selectedStaff)
        .map((row) => new Date(row.createdDate));
      setTaskDates(dates);
    } else {
      setTaskDates([]);
    }
  }, [selectedStaff, rows]);

  const adminStaffHandler = (role: string) => {
    if (role === "Admin") {
      setIsStaffBtnClicked(false);
      setIsAdminBtnClicked(true);
    } else {
      setIsStaffBtnClicked(true);
      setIsAdminBtnClicked(false);
    }
  };

  const handleDateChange = (date: DateObject | null): void => {
    if (date) {
      setStartDate(date.format("YYYY-MM-DD"));
    }
  };

  const handleStaffChange = (staffName: string): void => {
    setSelectedStaff(staffName);
  };

  const handlelectedStaffPerson = (staffName: string): void => {
    setSelectedStaffPerson(staffName);
  };

  const handleSaveRow = () => {
    if (!selectedStaff || !taskName || !taskDescription || !startDate) {
      alert("Please fill in all fields");
      return;
    }
    const newRow = {
      id: (rows.length + 1).toString(),
      staffName: selectedStaff,
      createdDate: startDate,
      taskName,
      taskDescription,
    };
    setRows([...rows, newRow]);
    setSelectedStaff("");
    setTaskName("");
    setTaskDescription("");
    setStartDate("");
  };

  const handleDeleteRow = (id: string) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleEditRow = (row: TaskRow) => {
    setEditingRowId(row.id);
    setSelectedStaff(row.staffName);
    setTaskName(row.taskName);
    setTaskDescription(row.taskDescription);
    setStartDate(row.createdDate);
  };

  const handleUpdateRow = () => {
    if (!selectedStaff || !taskName || !taskDescription || !startDate) {
      alert("Please fill in all fields");
      return;
    }
    const updatedRows = rows.map((row) =>
      row.id === editingRowId
        ? {
          ...row,
          staffName: selectedStaff,
          taskName,
          taskDescription,
          createdDate: startDate,
        }
        : row
    );
    setRows(updatedRows);
    setEditingRowId(null);
    setSelectedStaff("");
    setTaskName("");
    setTaskDescription("");
    setStartDate("");
  };

  const handleCancelEdit = () => {
    setEditingRowId(null);
    setSelectedStaff("");
    setTaskName("");
    setTaskDescription("");
    setStartDate("");
  };

  return (
    <Box sx={homeStyles.homeContainer}>
      <Box sx={homeStyles.navbar}>
        <Typography sx={homeStyles.logo}>TODO APP</Typography>
        <Box sx={homeStyles.buttonContainer}>
          <Button
            sx={homeStyles.button}
            onClick={() => adminStaffHandler("Admin")}
          >
            ADMIN
          </Button>
          <Button
            sx={homeStyles.button}
            onClick={() => adminStaffHandler("Staff")}
          >
            STAFF
          </Button>
        </Box>
      </Box>

      {isAdminBtnClicked && (
        <Box sx={homeStyles.bodyCont}>
          <Box sx={homeStyles.topCont}>
            <Box sx={homeStyles.allFieldsCont}>
              <Select
                required
                sx={homeStyles.selectEl}
                value={selectedStaff}
                displayEmpty
                onChange={(event) => handleStaffChange(event.target.value)}
              >
                <MenuItem value="" disabled>
                  Select Staff
                </MenuItem>
                {staffDropDownData.map((userObj: StaffDropDownInterface) => (
                  <MenuItem key={userObj.userId} value={userObj.staffName}>
                    {userObj.staffName}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                type="text"
                name="taskTitle"
                placeholder="Task Title"
                sx={homeStyles.textFieldStyle}
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <Box
                component="textarea"
                sx={homeStyles.textArea}
                placeholder="Enter your description here"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              ></Box>
              <Box sx={homeStyles.inputDateCont}>
                <TextField
                  type="text"
                  name="TaskCreateDate"
                  placeholder="Task Create Date"
                  value={startDate}
                  sx={homeStyles.textFieldStyle}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <CalendarTodayIcon
                          style={homeStyles.endAdornment}
                          onClick={() => startDateRef.current?.openCalendar()}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <DatePicker
                  fixRelativePosition
                  calendarPosition="bottom-center"
                  style={{ display: "none" }}
                  ref={startDateRef}
                  value={startDate}
                  onChange={handleDateChange}
                  format="YYYY-MM-DD"
                  containerStyle={{
                    position: "absolute",
                    top: "40px",
                    left: "270px",
                  }}
                />
              </Box>
              {editingRowId ? (
                <Box sx={homeStyles.btnsCont}>
                  <Button
                    sx={homeStyles.button}
                    onClick={handleUpdateRow}
                    focusRipple={false}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                  >
                    UPDATE
                  </Button>
                  <Button
                    sx={homeStyles.button}
                    onClick={handleCancelEdit}
                    focusRipple={false}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                  >
                    CANCEL
                  </Button>
                </Box>
              ) : (
                <Button
                  sx={homeStyles.button}
                  onClick={handleSaveRow}
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                >
                  SAVE
                </Button>
              )}
            </Box>
          </Box>

          <TableContainer component={Paper} sx={homeStyles.tableContainer}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={homeStyles.tableCellHeader}>
                    Staff Name
                  </TableCell>
                  <TableCell sx={homeStyles.tableCellHeader}>
                    Created Date
                  </TableCell>
                  <TableCell sx={homeStyles.tableCellHeader}>
                    Task Name
                  </TableCell>
                  <TableCell sx={homeStyles.tableCellDescriptionHeader}>
                    Task Description
                  </TableCell>
                  <TableCell sx={homeStyles.tableCellHeader}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} sx={homeStyles.tableRow}>
                    <TableCell sx={homeStyles.tableCell}>
                      {row.staffName}
                    </TableCell>
                    <TableCell sx={homeStyles.tableCell}>
                      {row.createdDate}
                    </TableCell>
                    <TableCell>
                      <Box sx={homeStyles.boxTaskName}>{row.taskName}</Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={homeStyles.boxTaskDescription}>
                        {row.taskDescription}
                      </Box>
                    </TableCell>
                    <TableCell sx={homeStyles.actionsCell}>
                      <Button
                        onClick={() => handleEditRow(row)}
                        sx={homeStyles.editButton}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        focusRipple={false}
                        disableRipple
                        disableFocusRipple
                        disableTouchRipple
                        onClick={() => handleDeleteRow(row.id)}
                        sx={homeStyles.deleteButton}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
      {isStaffBtnClicked && (
        <Box sx={homeStyles.bodyCont}>
          <Select
            required
            sx={homeStyles.selectEl}
            value={selectedStaffPerson}
            displayEmpty
            onChange={(event) => handlelectedStaffPerson(event.target.value)}
          >
            <MenuItem value="" disabled>
              Select Staff
            </MenuItem>
            {staffDropDownData.map((userObj: StaffDropDownInterface) => (
              <MenuItem key={userObj.userId} value={userObj.staffName}>
                {userObj.staffName}
              </MenuItem>
            ))}
          </Select>
          <CustomCalendar staffRowsData = {rows} selectedStaffPerson={selectedStaffPerson}/>
        </Box>
      )}
    </Box>
  );
};

export default Home;
