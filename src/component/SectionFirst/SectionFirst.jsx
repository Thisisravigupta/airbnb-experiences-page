import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import "./SectionFirst.css";
import { useState, useRef } from "react";
import { useEffect } from "react";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { btnContent, collection } from "./data";

const btnStyle = {
  border: "1px solid #DDEEE0",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  p: "4px",
};
const typoStyle = {
  position: "absolute",
  color: "#fff",
  left: "30px",
};

const showBtnStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  color: "#000",
  textTransform: "none",
  "&:hover": { backgroundColor: "#f5f5f5" },
  position: "absolute",
  left: "30px",
  bottom: "30px",
};
const SectionFirst = () => {
  const [width, setWidth] = useState(0);
  const [transform, setTransform] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleLeft = () => {
    setTransform(0);
  };

  const handleRight = () => {
    setTransform(-518.576);
  };

  return (
    <Box ml={{ xs: 1, sm: 7 }} mr={{ xs: 1, sm: 7 }}>
      <Box
        p={1.5}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h4"
          fontWeight={600}
          fontSize={{ xs: "1.5rem", sm: "2.1rem" }}
        >
          New this week
        </Typography>
        <Box display="flex" gap={1}>
          <KeyboardArrowLeftOutlined sx={btnStyle} onClick={handleLeft} />
          <KeyboardArrowRightOutlined sx={btnStyle} onClick={handleRight} />
        </Box>
      </Box>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
          style={{
            transform: `translateX(${transform}px)`,
            transition: "all 0.5s ease",
          }}
        >
          {collection.map((ele, index) => {
            return (
              <motion.div
                className="item"
                key={index}
                style={{ position: "relative" }}
              >
                <Typography sx={typoStyle} top="30px" fontSize="14px">
                  Collection
                </Typography>
                <Typography
                  variant="h5"
                  width="240px"
                  top="50px"
                  fontWeight={550}
                  sx={typoStyle}
                >
                  {ele.content}
                </Typography>
                <Button variant="contained" sx={showBtnStyle}>
                  Show all
                </Button>
                <img src={ele.image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <Box
        display={{ xs: "none", sm: "flex" }}
        sx={{
          alignItems: "center",
          overflow: "hidden",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Stack direction="row" spacing={1}>
          <Chip label="Dates" />
          <Chip label="Group size" />
          <Chip label="More filters" />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Stack direction="row">
            <KeyboardArrowLeftOutlined sx={btnStyle} />
            <Box
              display="flex"
              width="920px"
              overflow="hidden"
              alignItems="center"
              gap={1}
            >
              {btnContent.map((item, ind) => {
                return <Chip label={item} key={ind} />;
              })}
            </Box>
            <KeyboardArrowRightOutlined sx={btnStyle} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionFirst;
