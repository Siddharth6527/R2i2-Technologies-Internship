import React from "react";
import { Box, ListItem, Stack, Typography } from "@mui/material";
import AuthorIMG from "../Photo.svg";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const ListEvent = (props) => {
  return (
    <ListItem>
      <Stack
        direction="row"
        spacing={3}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography variant="Body1" color="#adb5bd">
          11:30 AM
        </Typography>

        {props.img === "1" && (
          <SwitchAccountOutlinedIcon
            sx={{
              color: "white",
              background: "#4c6ef5",
              padding: 5 + "px",
              borderRadius: 50 + "%",
            }}
          />
        )}
        {props.img === "2" && (
          <ChatOutlinedIcon
            sx={{
              color: "white",
              background: "#4c6ef5",
              padding: 5 + "px",
              borderRadius: 50 + "%",
            }}
          />
        )}
        <Box>
          <Typography variant="subtitle1" color="initial">
            {props.text}
          </Typography>
          <Box>
            <Box sx={{ display: "flex", gap: 5 + "px" }}>
              <img src={AuthorIMG} alt="" />
              <Typography variant="subtitle2" color="#adb5bd">
                Sheila O'Riley
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </ListItem>
  );
};

export default ListEvent;
