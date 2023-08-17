import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  List,
  ListItem,
  Grid,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import AuthorIMG from "../Photo.svg";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CustomDivider from "../components/CustomDivider";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function TasksList(props) {
  // List of Events
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Demo>
            <List sx={{ background: "#f8f9fa" }} dense={true}>
              {/* Mapping through the Array of elements passed as Props */}
              {props.data.map((item) => (
                <ListItem>
                  <Stack
                    direction="row"
                    spacing={3}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography variant="Body1" color="#adb5bd">
                      {item.time}
                    </Typography>
                    {item.icon === "1" && (
                      <Box>
                        <Divider
                          sx={{
                            height: 37 + "px",
                            position: "absolute",
                            left: 17 + "%",
                            top: -20 + "px",
                            zIndex: "8",
                          }}
                          orientation="vertical"
                        />
                        <CustomDivider />
                        <SwitchAccountIcon
                          sx={{
                            color: "white",
                            background: "#4c6ef5",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                          }}
                        />
                      </Box>
                    )}

                    {item.icon === "2" && (
                      <Box>
                        <CustomDivider />
                        <ChatOutlinedIcon
                          sx={{
                            color: "white",
                            background: "#DC395F",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                          }}
                        />
                      </Box>
                    )}
                    {item.icon === "3" && (
                      <Box>
                        <CustomDivider />
                        <DoneOutlinedIcon
                          sx={{
                            color: "white",
                            background: " #3FB883",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                          }}
                        />
                      </Box>
                    )}
                    {item.icon === "4" && (
                      <Box>
                        <CustomDivider />
                        <BrowserUpdatedOutlinedIcon
                          sx={{
                            color: "white",
                            background: "#FB8789",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                            zIndex: "10",
                          }}
                        />
                      </Box>
                    )}
                    {item.icon === "5" && (
                      <Box>
                        <Divider
                          sx={{
                            height: 100 + "px",
                            position: "absolute",
                            left: 17 + "%",
                            top: 73 + "%",
                            zIndex: "5",
                          }}
                          orientation="vertical"
                        />
                        <BookmarkIcon
                          sx={{
                            color: "white",
                            background: "#F2BB27",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                          }}
                        />
                      </Box>
                    )}
                    {item.icon === "6" && (
                      <Box>
                        <Divider
                          sx={{
                            height: 37 + "px",
                            position: "absolute",
                            left: 17 + "%",
                            top: -20 + "px",
                            zIndex: "8",
                          }}
                          orientation="vertical"
                        />
                        <CustomDivider />
                        <GroupsIcon
                          sx={{
                            color: "white",
                            background: "#4c6ef5",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                          }}
                        />
                      </Box>
                    )}
                    {item.icon === "7" && (
                      <Box>
                        <CustomDivider />
                        <ChatIcon
                          sx={{
                            color: "white",
                            background: "#A259FF",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                          }}
                        />
                      </Box>
                    )}
                    {item.icon === "8" && (
                      <Box>
                        <CustomDivider />
                        <PriorityHighIcon
                          sx={{
                            color: "white",
                            background: " #E94235",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                          }}
                        />
                      </Box>
                    )}
                    {item.icon === "9" && (
                      <Box>
                        <QueryBuilderIcon
                          sx={{
                            color: "white",
                            background: "#F2DF37",
                            padding: 8 + "px",
                            borderRadius: 50 + "%",
                          }}
                        />
                      </Box>
                    )}
                    <Box>
                      <Typography
                        sx={{ mt: 20 + "px" }}
                        variant="subtitle1"
                        color="initial"
                      >
                        {item.task}
                      </Typography>
                      <Box>
                        <Box sx={{ display: "flex", gap: 5 + "px" }}>
                          <img src={AuthorIMG} alt="" />
                          <Typography variant="subtitle2" color="#adb5bd">
                            {item.author}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
