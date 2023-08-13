import "./App.css";
import { Box } from "@mui/material";
import DayCard from "./components/DayCard";

function App() {
  return (
    <Box
      sx={{
        width: 1440 + "px",
        height: 1024 + "px",
        borderRadius: 40 + "px",
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Box sx={{ height: 171 + "px" }} />
      <Box
        sx={{
          width: 800 + "px",
          height: 420 + "px",
          // mt: 171 + "px",
          ml: 158 + "px",
          borderRadius: 6 + "px",
          // backgroundColor: "primary.dark",
          backgroundColor: "green",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <DayCard />
      </Box>
    </Box>
  );
}

export default App;
