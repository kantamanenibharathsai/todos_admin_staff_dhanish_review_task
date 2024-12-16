import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import homeStyles from "../pages/home/HomeStyles";
import { TaskRow } from "../utils/TypescriptData";
import CustomButton from "./CustomButton";

interface DataTableProps {
  rows: TaskRow[];
  onEdit: (row: TaskRow) => void;
  onDelete: (id: string) => void;
}

const DataTable: React.FC<DataTableProps> = ({ rows, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={homeStyles.tableContainer}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={homeStyles.tableCellHeader}>Staff Name</TableCell>
            <TableCell sx={homeStyles.tableCellHeader}>Created Date</TableCell>
            <TableCell sx={homeStyles.tableCellHeader}>Task Name</TableCell>
            <TableCell sx={homeStyles.tableCellDescriptionHeader}>
              Task Description
            </TableCell>
            <TableCell sx={homeStyles.tableCellHeader}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={homeStyles.tableRow}>
              <TableCell sx={homeStyles.tableCell}>{row.staffName}</TableCell>
              <TableCell sx={homeStyles.tableCell}>{row.createdDate}</TableCell>
              <TableCell>
                <Box sx={homeStyles.boxTaskName}>{row.taskName}</Box>
              </TableCell>
              <TableCell>
                <Box sx={homeStyles.boxTaskDescription}>
                  {row.taskDescription}
                </Box>
              </TableCell>
              <TableCell sx={homeStyles.actionsCell}>
                <CustomButton onClick={() => onEdit(row)} isEditIcon={true} />
                <CustomButton
                  onClick={() => onDelete(row.id)}
                  isDeleteIcon={true}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
