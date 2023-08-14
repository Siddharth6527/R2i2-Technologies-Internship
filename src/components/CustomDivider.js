import React from "react";
import { Divider } from "@mui/material";

const CustomDivider = () => {
  return (
    <Divider
      sx={{
        height: 40 + "px",
        position: "absolute",
        left: 17 + "%",
        top: 73 + "%",
        zIndex: "5",
      }}
      orientation="vertical"
    />
  );
};

export default CustomDivider;
