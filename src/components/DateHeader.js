import { Box, Typography } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import CustomDivider from "./CustomDivider";
import { Divider } from "@mui/material";

const DateHeader = (props) => {
  return (
    <Box sx={{ width: 800 + "px" }}>
      <Stack direction="row" spacing={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "content",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ marginLeft: 30 + "px" }}
            variant="h6"
            color="initial"
          >
            {props.day}
          </Typography>
          <Typography
            sx={{ marginLeft: 40 + "px" }}
            variant="body2"
            color="#adb5bd"
          >
            {props.month}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="initial"
            sx={{
              backgroundColor: "#3FB883",
              padding: 2 + "px",
              pl: 5 + "px",
              pr: 5 + "px",
              borderRadius: 5 + "px",
              mt: 5 + "px",
              color: "white",
              position: "relative",
            }}
          >
            {props.date}
          </Typography>
          {/* <Divider
            sx={{
              height: 36 + "px",
              position: "absolute",
              // left: 16.3 + "%",
              // left: 16.3 + "px",
              // top: 73 + "%",
              zIndex: "5",
            }}
            orientation="vertical"
          /> */}
        </Box>
      </Stack>
    </Box>
  );
};

export default DateHeader;
