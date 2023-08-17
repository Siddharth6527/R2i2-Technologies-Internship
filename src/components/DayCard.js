import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DateHeader from "./DateHeader";
import TasksList from "./TasksList";
import { Divider, Grid } from "@mui/material";

export default function DayCard() {
  const data1 = [
    {
      id: "1",
      icon: "1",
      time: "11:30 AM",
      task: "New Task Assigned to you",
      author: "Sheila O'Riley",
    },
    {
      id: "2",
      icon: "2",
      time: "11:30 AM",
      task: "New feedback received for Task Name",
      author: "Sheila O'Riley",
    },
    {
      id: "3",
      icon: "3",
      time: "11:30 AM",
      task: "Task marked completed by you",
      author: "Sheila O'Riley",
    },
    {
      id: "4",
      icon: "4",
      time: "11:30 AM",
      task: "Task Name updated for journey Journey Name",
      author: "Sheila O'Riley",
    },
    {
      id: "5",
      icon: "5",
      time: "11:30 AM",
      task: "Follow up on feedback for Task Name completed on Date XX/YY/ZZ",
      author: "Sheila O'Riley",
    },
  ];

  const data2 = [
    {
      id: "6",
      icon: "6",
      time: "11:30 AM",
      task: "Meeting with Bobby Charlie",
      author: "Sheila O'Riley",
    },
    {
      id: "7",
      icon: "7",
      time: "11:30 AM",
      task: "Chat about Design Mentorship",
      author: "Sheila O'Riley",
    },
    {
      id: "8",
      icon: "8",
      time: "11:30 AM",
      task: "Critical delay observed in time line adherence",
      author: "Sheila O'Riley",
    },
    {
      id: "9",
      icon: "9",
      time: "11:30 AM",
      task: "Finish project documentaton for review (1-1 checkin)",
      author: "Sheila O'Riley",
    },
  ];

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
          {/* NEW CODE */}
          <TasksList data={data1} />
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
          {/* NEW CODE */}
          <TasksList data={data2} />
        </CardContent>
      </Card>
    </>
  );
}
