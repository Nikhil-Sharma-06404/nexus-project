import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#1A1A19",  // Footer background color
        color: "white",     // Text color
        p: 2,               // Reduced padding
        position: "fixed",  // Fix position at the bottom
        bottom: 0,
        width: "100%",
        zIndex: 1200,       // Ensure footer is above content but below header
      }}
    >
      <Box
        sx={{
          my: 2,
          "& svg": {
            fontSize: "40px",  // Reduced icon size
            cursor: "pointer",
            mr: 2,
            transition: "all 400ms",
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translateX(5px)",
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Social Media Icons */}
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
        <YouTubeIcon />
      </Box>
      <Typography
        variant="h6"
        sx={{
          "@media (max-width:600px)": {
            fontSize: "0.8rem",  // Adjusted font size for smaller screens
          },
        }}
      >
        All Rights Reserved &copy; Food'hut
      </Typography>
    </Box>
  );
};

export default Footer;
