import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import React from "react";
import homeStyles from "../pages/home/HomeStyles";

const buttonStyles = {
  button: {
    fontWeight: 600,
    textTransform: "none",
    color: "#333",
    fontSize: "13px",
    border: "1px solid #333",
    alignSelf: "flex-start",
    "&:hover": {
      background: "#333",
      border: 0,
      color: "#fff",
    },
  },
};

interface CustomButtonProps {
  text?: string;
  onClick: () => void;
  isEditIcon?: boolean;
  isDeleteIcon?: boolean;
  isActive?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  isEditIcon,
  isDeleteIcon,
  isActive,
}) => {
  if (isEditIcon) {
    return (
      <Button onClick={onClick} sx={homeStyles.editButton}>
        <EditIcon />
      </Button>
    );
  }

  if (isDeleteIcon) {
    return (
      <Button onClick={onClick} sx={homeStyles.deleteButton}>
        <DeleteIcon />
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      sx={{
        ...buttonStyles.button,
        backgroundColor: isActive ? "black" : "#fff",
        color: !isActive ? "black" : "#fff",
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
