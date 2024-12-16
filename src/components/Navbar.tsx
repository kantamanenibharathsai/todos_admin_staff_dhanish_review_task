import { Box, Typography } from "@mui/material";
import React from "react";
import homeStyles from "../pages/home/HomeStyles";
import CustomButton from "./CustomButton";

interface NavbarProps {
  onAdminClick: () => void;
  onStaffClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick, onStaffClick }) => {
  return (
    <Box sx={homeStyles.navbar}>
      <Typography sx={homeStyles.logo}>TODO APP</Typography>
      <Box sx={homeStyles.buttonContainer}>
        <CustomButton text="ADMIN" onClick={onAdminClick} />
        <CustomButton text="STAFF" onClick={onStaffClick} />
      </Box>
    </Box>
  );
};

export default Navbar;
