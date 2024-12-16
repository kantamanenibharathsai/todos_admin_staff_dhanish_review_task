import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import {
  Box,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useRef } from "react";
import DatePicker, { DateObject, DatePickerRef } from "react-multi-date-picker";
import homeStyles from "../pages/home/HomeStyles";
import { StaffDropDownInterface } from "../utils/TypescriptData";
import CustomButton from "./CustomButton";


interface AdminFormProps {
  selectedStaff: string;
  taskName: string;
  taskDescription: string;
  startDate: string;
  editingRowId: string | null;
  staffDropDownData: StaffDropDownInterface[];
  onStaffChange: (staffName: string) => void;
  onTaskNameChange: (taskName: string) => void;
  onTaskDescriptionChange: (description: string) => void;
  onDateChange: (date: DateObject | null) => void;
  onSave: () => void;
  onUpdate: () => void;
  onCancelEdit: () => void;
}

const AdminForm: React.FC<AdminFormProps> = ({
  selectedStaff,
  taskName,
  taskDescription,
  startDate,
  editingRowId,
  staffDropDownData,
  onStaffChange,
  onTaskNameChange,
  onTaskDescriptionChange,
  onDateChange,
  onSave,
  onUpdate,
  onCancelEdit,
}) => {
  const startDateRef = useRef<DatePickerRef | null>(null);

  return (
    <Box sx={homeStyles.allFieldsCont}>
      <Select
        required
        sx={homeStyles.selectEl}
        value={selectedStaff}
        displayEmpty
        onChange={(event) => onStaffChange(event.target.value)}
      >
        <MenuItem value="" disabled>
          Select Staff
        </MenuItem>
        {staffDropDownData.map((userObj) => (
          <MenuItem key={userObj.userId} value={userObj.staffName}>
            {userObj.staffName}
          </MenuItem>
        ))}
      </Select>
      <TextField
        type="text"
        placeholder="Task Title"
        sx={homeStyles.textFieldStyle}
        value={taskName}
        onChange={(e) => onTaskNameChange(e.target.value)}
      />
      <Box
        component="textarea"
        sx={homeStyles.textArea}
        placeholder="Enter your description here"
        value={taskDescription}
        onChange={(e) => onTaskDescriptionChange(e.target.value)}
      ></Box>
      <Box sx={homeStyles.inputDateCont}>
        <TextField
          type="text"
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
          onChange={onDateChange}
          format="YYYY-MM-DD"
        />
      </Box>
      {editingRowId ? (
        <Box sx={homeStyles.btnsCont}>
          <CustomButton text="UPDATE" onClick={onUpdate} />
          <CustomButton text="CANCEL" onClick={onCancelEdit} />
        </Box>
      ) : (
        <CustomButton text="SAVE" onClick={onSave} />
      )}
    </Box>
  );
};

export default AdminForm;
