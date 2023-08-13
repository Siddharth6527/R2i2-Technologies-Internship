import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DateHeader from "./DateHeader";
import TasksList from "./TasksList";
import TasksList2 from "./TasksList2";
import { Divider } from "@mui/material";

export default function DayCard() {
  return (
    <>
      <Card sx={{ minWidth: 275, mb: 50 + "px" }}>
        <CardContent>
          <DateHeader day="WED" date="30" month="Jul" />
          <TasksList />
        </CardContent>
      </Card>
      <Divider variant="middle" />
      <Card sx={{ minWidth: 275, mb: 50 + "px" }}>
        <CardContent>
          <DateHeader day="THU" date="29" month="Jul" />
          <TasksList2 />
        </CardContent>
      </Card>
    </>
  );
}
