import { Box } from "@mui/material";
import React from "react";
import Header from "./Header/Header";
import SectionFirst from "./SectionFirst/SectionFirst";
import SectionSec from "./SectionSec/SectionSec";

const Main = () => {
  return (
    <Box>
      <Header />
      <SectionFirst />
      <SectionSec />
    </Box>
  );
};

export default Main;
