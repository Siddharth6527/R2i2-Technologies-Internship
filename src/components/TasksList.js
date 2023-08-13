import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

import { Stack } from "@mui/material";

import ListEvent from "./ListEvent";
import AuthorIMG from "../Photo.svg";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function TasksList() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Demo>
            <List dense={true}>
              <ListItem>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="Body1" color="#adb5bd">
                    11:30 AM
                  </Typography>

                  <SwitchAccountIcon
                    sx={{
                      color: "white",
                      background: "#4c6ef5",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      New task assigned to you
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
              <ListItem>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="Body1" color="#adb5bd">
                    11:30 AM
                  </Typography>

                  <ChatOutlinedIcon
                    sx={{
                      color: "white",
                      background: "#DC395F",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      New feedback recieved for Task Name
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
              <ListItem>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="Body1" color="#adb5bd">
                    11:30 AM
                  </Typography>

                  <DoneOutlinedIcon
                    sx={{
                      color: "white",
                      background: " #3FB883",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      Task marked completed by you
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
              <ListItem>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="Body1" color="#adb5bd">
                    11:30 AM
                  </Typography>

                  <BrowserUpdatedOutlinedIcon
                    sx={{
                      color: "white",
                      background: "#FB8789",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      Task Name updated for journey Journey Name
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
              <ListItem>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="Body1" color="#adb5bd">
                    11:30 AM
                  </Typography>

                  <BookmarkIcon
                    sx={{
                      color: "white",
                      background: "#F2BB27",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      Follow up on feedback for Task Name completed on Date
                      XX/YY/ZZZZ
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
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
