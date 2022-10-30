import { AccountCircle, Language, Menu } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import logo from "../../logo.svg";

const containerStyle = {
  backgroundColor: "#fff",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 1,
  borderBottom: "0.5px solid gray",
};

const dFlexAlignCenJustCen = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 1,
  pl: 1,
  pr: 0.6,
  border: "0.3px solid gray",
  borderRadius: "50px",
  transition: "all .3s linear",
  "&:hover": { boxShadow: "0px 2px 2px gray" },
};

const header = () => {
  return (
    <Container maxWidth="100vw" sx={containerStyle}>
      <Box
        sx={dFlexAlignCenJustCen}
        width="100%"
        pl={{ xs: 0, sm: 5 }}
        pr={{ xs: 0, sm: 4 }}
      >
        <Box display="flex" gap={1}>
          <img src={logo} alt="logo" width={30} height={32} />
          <Typography
            variant="p"
            fontWeight={900}
            fontSize={20}
            color="#ff385c"
            display={{ xs: "none", sm: "block" }}
          >
            airbnb
          </Typography>
        </Box>
        <Box display="flex" gap={0.8}>
          <IconButton
            aria-label="host"
            sx={{ borderRadius: "20px", color: "#000" }}
          >
            <Typography pl={1} pr={1}>
              Become a host
            </Typography>
          </IconButton>
          <IconButton aria-label="lang" sx={{ borderRadius: "20px" }}>
            <Language fontSize="medium" sx={{ color: "#000" }} />
          </IconButton>
          <Box sx={boxStyle}>
            <Menu sx={{ color: "#000" }} />
            <AccountCircle sx={{ color: "gray", fontSize: "32px" }} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default header;
