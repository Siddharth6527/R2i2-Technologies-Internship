import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DateHeader from "./DateHeader";
import TasksList from "./TasksList";
import TasksList2 from "./TasksList2";
import { Divider, Grid } from "@mui/material";

export default function DayCard() {
  return (
    <>
      {/* Day Card 1 */}
      <Card
        sx={{
          minWidth: 275,
          background: "#f8f9fa",
          ml: 8 + "px",
          boxShadow: "none",
        }}
      >
        {/* Resuable Components */}
        <CardContent>
          {/* // Passing Props for keeping code lean */}
          <DateHeader day="WED" date="30" month="Jul" />
          <TasksList />
        </CardContent>
      </Card>
      {/* Added Divider */}
      <Grid sx={{ width: 608 + "px" }} container spacing={2}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Divider
            sx={{
              width: { xs: 400 + "px", sm: 1420 + "px" },
            }}
          />
        </Grid>
      </Grid>
      {/* Day Card 2 */}
      <Card
        sx={{
          minWidth: 275,
          ml: 8 + "px",
          boxShadow: "none",
          position: "relative",
          background: "#f8f9fa",
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
        {/* Resuable Components */}
        <CardContent>
          {/* // Passing Props for keeping code lean */}
          <DateHeader day="THU" date="29" month="Jul" />
          <TasksList2 />
        </CardContent>
      </Card>
    </>
  );
}
