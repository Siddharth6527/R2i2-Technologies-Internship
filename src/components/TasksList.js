import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack, Divider } from "@mui/material";
import AuthorIMG from "../Photo.svg";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CustomDivider from "../components/CustomDivider";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function TasksList() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Demo>
            <List sx={{ background: "#f1f3f5" }} dense={true}>
              <ListItem>
                <Stack
                  direction="row"
                  spacing={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography variant="Body1" color="#adb5bd">
                    11:30 AM
                  </Typography>
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
                  <Box>
                    <Typography
                      sx={{ mt: 20 + "px" }}
                      variant="subtitle1"
                      color="initial"
                    >
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
                  <Box>
                    <Typography
                      sx={{ mt: 20 + "px" }}
                      variant="subtitle1"
                      color="initial"
                    >
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
                  <Box>
                    <Typography
                      sx={{ mt: 20 + "px" }}
                      variant="subtitle1"
                      color="initial"
                    >
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
                  <Box>
                    <Typography
                      sx={{ mt: 20 + "px" }}
                      variant="subtitle1"
                      color="initial"
                    >
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
                  <Box>
                    <Typography
                      sx={{ mt: 20 + "px" }}
                      variant="subtitle1"
                      color="initial"
                    >
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
