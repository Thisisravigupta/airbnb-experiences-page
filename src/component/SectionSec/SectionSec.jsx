import {
  FavoriteBorderTwoTone,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  Star,
} from "@mui/icons-material";
import { Box, Card, CardMedia, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { SectionSecContent } from "./data";

const dFlexAlignCen = {
  display: "flex",
  alignItems: "center",
};

const style = {
  display: "flex",
  width: "90vw",
  gap: 2,
  flexWrap: "wrap",
};

const styleRespo = {
  position: "relative",
  width: { xs: "100%", sm: "48%", md: "15%", lg: "15.6%" },
  mb: { xs: "10px", sm: "0px" },
};

const btnStyle = {
  border: "1px solid #DDEEE0",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  p: "4px",
};

const SectionSec = () => {
  const [page, setPage] = useState(0);

  const handlePrev = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (page === 0) {
      setPage((prev) => prev + 1);
    }
  };
  return (
    <Box flexDirection="column" justifyContent="center" sx={dFlexAlignCen}>
      <Box justifyContent="space-between" width="92vw" p={2} sx={dFlexAlignCen}>
        <Typography variant="h6" fontWeight={600}>
          Plan a trip with help from local Hosts around the world
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Link display={{ xs: "none", sm: "block" }} sx={{ color: "#000" }}>
            Show 9
          </Link>
          <Box display={{ xs: "none", sm: "flex" }} gap={1}>
            <KeyboardArrowLeftOutlined sx={btnStyle} onClick={handlePrev} />
            <KeyboardArrowRightOutlined sx={btnStyle} onClick={handleNext} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={style}>
          {SectionSecContent[page].map((item, idx) => {
            return (
              <Box sx={styleRespo} key={idx}>
                <Card>
                  <CardMedia
                    component="video"
                    image={item.video}
                    autoPlay
                    muted
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  />
                </Card>
                <FavoriteBorderTwoTone
                  sx={{
                    position: "absolute",
                    top: "18px",
                    right: "18px",
                  }}
                />
                <Box sx={dFlexAlignCen} width="100%" mt={1}>
                  <Star fontSize="small" />
                  <Box sx={dFlexAlignCen}>
                    <Typography>{item.rating}</Typography>
                    <Typography sx={{ opacity: 0.8 }}>
                      ({item.ratingBy}) &#183;
                    </Typography>
                    <Typography fontSize="14px"> {item.country}</Typography>
                  </Box>
                </Box>
                <Typography variant="p" sx={{ opacity: 0.8 }}>
                  {item.title}
                </Typography>
                <Box sx={dFlexAlignCen}>
                  <Typography fontWeight="bold">
                    From &#8377;{item.price}
                  </Typography>
                  <Typography>/person</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SectionSec;
