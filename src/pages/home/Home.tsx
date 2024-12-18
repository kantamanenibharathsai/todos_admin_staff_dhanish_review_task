import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Grid2,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AdminForm from "../../components/AdminForm";
import CustomCalendar from "../../components/CustomCalendar";
import DataTable from "../../components/DataTable";
import Navbar from "../../components/Navbar";
import {
  staffDropDownData,
  StaffDropDownInterface,
  staticRows,
  TaskRow,
} from "../../utils/TypescriptData";
import homeStyles from "./HomeStyles";

const Home: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<"admin" | "staff">("admin");
  const [tasks, setTasks] = useState<TaskRow[]>(staticRows);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [editingRowId, setEditingRowId] = useState<string | null>(null);
  const [selectedStaffPerson, setSelectedStaffPerson] = useState<string>("");
  const [selectedTasksCards, setSelectedTasksCards] = useState<TaskRow[]>([]);

  const handleSelectedStaffPerson = (staffName: string): void => {
    setSelectedStaffPerson(staffName);
  };

  const selectedTasksCardsHandler = (tasks: TaskRow[]): void => {
    setSelectedTasksCards(tasks);
  };

  const handleSaveTask = () => {
    if (selectedStaff && taskName && taskDescription && startDate) {
      setTasks(prevTasks => [
        ...prevTasks, 
        { id: Date.now().toString(), staffName: selectedStaff, createdDate: startDate, taskName, taskDescription }
      ]);
      clearForm();
    }
  };
  

  const handleUpdateTask = () => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === editingRowId
          ? {
              ...task,
              staffName: selectedStaff,
              taskName,
              taskDescription,
              createdDate: startDate,
            }
          : task
      )
    );
    clearForm();
  };

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEditTask = (task: TaskRow) => {
    setSelectedStaff(task.staffName);
    setTaskName(task.taskName);
    setTaskDescription(task.taskDescription);
    setStartDate(task.createdDate);
    setEditingRowId(task.id);
  };

  const clearForm = () => {
    setSelectedStaff("");
    setTaskName("");
    setTaskDescription("");
    setStartDate("");
    setEditingRowId(null);
  };

  const renderTasks = () => {
    return (
      selectedTasksCards.length > 0 && (
        <Box sx={homeStyles.centeredBox}>
          <Grid2 container spacing={2} justifyContent="flex-start">
            {selectedTasksCards.map((task) => (
              <Grid item xs={12} sm={6} md={4} key={task.id}>
                <Card sx={homeStyles.card}>
                  <CardHeader
                    title={task.taskName}
                    subheader={task.createdDate}
                    sx={homeStyles.cardHeader}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={homeStyles.cardContent}
                    >
                      {task.taskDescription}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid2>
        </Box>
      )
    );
  };

  return (
    <Box sx={homeStyles.homeContainer}>
      <Navbar
        onAdminClick={() => setSelectedRole("admin")}
        onStaffClick={() => setSelectedRole("staff")}
      />
      {selectedRole === "admin" && (
        <Box sx={homeStyles.bodyCont}>
          <AdminForm
            selectedStaff={selectedStaff}
            taskName={taskName}
            taskDescription={taskDescription}
            startDate={startDate}
            editingRowId={editingRowId}
            staffDropDownData={staffDropDownData}
            onStaffChange={setSelectedStaff}
            onTaskNameChange={setTaskName}
            onTaskDescriptionChange={setTaskDescription}
            onDateChange={(date) =>
              setStartDate(date?.format("YYYY-MM-DD") || "")
            }
            onSave={handleSaveTask}
            onUpdate={handleUpdateTask}
            onCancelEdit={clearForm}
          />
          <DataTable
            rows={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </Box>
      )}
      {selectedRole === "staff" && (
        <Box sx={homeStyles.staffBodyCont}>
          <Box sx={homeStyles.leftCont}>
            <Select
              required
              sx={homeStyles.selectEl}
              value={selectedStaffPerson}
              displayEmpty
              onChange={(event) =>
                handleSelectedStaffPerson(event.target.value)
              }
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
            <CustomCalendar
              staffRowsData={tasks}
              selectedStaffPerson={selectedStaffPerson}
              selectedTasksCardsHandler={selectedTasksCardsHandler}
            />
          </Box>
          <Box sx={homeStyles.rightCont}>{renderTasks()}</Box>
        </Box>
      )}
    </Box>
  );
};

export default Home;
