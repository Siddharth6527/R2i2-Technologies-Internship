import "./App.css";
import { Box } from "@mui/material";
import DayCard from "./components/DayCard";
// Using React JS with Material UI

function App() {
  // Single Page Application
  // Page Layouts
  return (
    <Box
      sx={{
        height: {
          sm: 1300 + "px",
        },
        width: 1920 + "px",
        borderRadius: 40 + "px",

        background: "#f8f9fa",
      }}
    >
      <Box sx={{ height: 171 + "px", color: "#f8f9fa" }} />
      <Box
        // Code for Mobile Responsive
        sx={{
          width: {
            xs: 1400 + "px",
            sm: 800 + "px",
          },
          height: 420 + "px",
          ml: {
            xs: 20 + "px",
            sm: 158 + "px",
          },
          borderRadius: 6 + "px",
        }}
      >
        {/* Resuable Component*/}
        <DayCard />
      </Box>
    </Box>
  );
}

export default App;
