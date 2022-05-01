import { Box } from "@mui/material";
import React from "react";
import Logo from "./logo";
import Navbar from "./nav";
import HeaderRight from "./right";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p=" 15px 25px"
    >
      <Navbar />
      <Logo />
      <HeaderRight />
    </Box>
  );
};

export default Header;
