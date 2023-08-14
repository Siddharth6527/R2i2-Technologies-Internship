import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DateHeader from "./DateHeader";
import TasksList from "./TasksList";
import TasksList2 from "./TasksList2";
import { Divider, Stack, Grid } from "@mui/material";

export default function DayCard() {
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          background: "#f1f3f5",
          ml: 8 + "px",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <DateHeader day="WED" date="30" month="Jul" />
          <TasksList />
        </CardContent>
      </Card>

      <Box sx={{ width: 600 + "px" }}>
        <Stack direction={"column"}>
          <Box sx={{ width: 200 + "px" }}></Box>
          <Box></Box>
        </Stack>
      </Box>
      <Grid sx={{ width: 608 + "px" }} container spacing={2}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Divider sx={{ width: 1420 + "px" }} />
        </Grid>
      </Grid>
      <Card
        sx={{
          minWidth: 275,
          ml: 8 + "px",
          boxShadow: "none",
          position: "relative",
          background: "#f1f3f5",
        }}
      >
        <Divider
          sx={{
            height: 22 + "px",
            position: "absolute",
            left: 144 + "px",
            top: 0 + "px",
            zIndex: "5",
          }}
          orientation="vertical"
        />
        <CardContent>
          <DateHeader day="THU" date="29" month="Jul" />
          <TasksList2 />
        </CardContent>
      </Card>
    </>
  );
}
