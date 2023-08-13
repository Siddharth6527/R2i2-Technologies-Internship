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
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function TasksList2() {
  // const [dense, setDense] = React.useState(true);
  // const [secondary, setSecondary] = React.useState(true);

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

                  <GroupsIcon
                    sx={{
                      color: "white",
                      background: "#4c6ef5",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      Meeting with Bobby Charlie
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

                  <ChatIcon
                    sx={{
                      color: "white",
                      background: "#A259FF",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      Chat about Design Mentorship
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

                  <PriorityHighIcon
                    sx={{
                      color: "white",
                      background: " #E94235",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      Critical delay observed in time line adherence
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

                  <QueryBuilderIcon
                    sx={{
                      color: "white",
                      background: "#F2DF37",
                      padding: 8 + "px",
                      borderRadius: 50 + "%",
                    }}
                  />

                  <Box>
                    <Typography variant="subtitle1" color="initial">
                      Finish project documentation for review (1-1 checkin)
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
