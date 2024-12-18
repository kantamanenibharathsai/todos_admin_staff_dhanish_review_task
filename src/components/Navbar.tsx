import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import homeStyles from "../pages/home/HomeStyles";
import CustomButton from "./CustomButton";

interface NavbarProps {
  onAdminClick: () => void;
  onStaffClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick, onStaffClick }) => {
  const [activeButton, setActiveButton] = useState<string>("admin");

  const handleAdminClick = () => {
    setActiveButton("admin");
    onAdminClick();
  };

  const handleStaffClick = () => {
    setActiveButton("staff");
    onStaffClick();
  };

  return (
    <Box sx={homeStyles.navbar}>
      <Typography sx={homeStyles.logo}>TODO APP</Typography>
      <Box sx={homeStyles.buttonContainer}>
        <CustomButton
          text="ADMIN"
          onClick={handleAdminClick}
          isActive={activeButton === "admin"}
        />
        <CustomButton
          text="STAFF"
          onClick={handleStaffClick}
          isActive={activeButton === "staff"}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
