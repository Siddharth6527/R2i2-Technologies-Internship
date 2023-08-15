import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import AuthorIMG from "../Photo.svg";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CustomDivider from "./CustomDivider";
import { Divider } from "@mui/material";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function TasksList2() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Demo>
            <List sx={{ background: "#f8f9fa" }} dense={true}>
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
                    <GroupsIcon
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
                  <Box>
                    <Typography
                      sx={{ mt: 20 + "px" }}
                      variant="subtitle1"
                      color="initial"
                    >
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
                  <Box>
                    <Typography
                      sx={{ mt: 20 + "px" }}
                      variant="subtitle1"
                      color="initial"
                    >
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
                    <Typography
                      sx={{ mt: 20 + "px" }}
                      variant="subtitle1"
                      color="initial"
                    >
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
