import "./App.css";
import { Box } from "@mui/material";
import DayCard from "./components/DayCard";

function App() {
  return (
    <Box
      sx={{
        width: 1920 + "px",
        height: 1300 + "px",
        borderRadius: 40 + "px",

        background: "#f1f3f5",
      }}
    >
      <Box sx={{ height: 171 + "px" }} />
      <Box
        sx={{
          width: 800 + "px",
          height: 420 + "px",
          ml: 158 + "px",
          borderRadius: 6 + "px",
        }}
      >
        <DayCard />
      </Box>
    </Box>
  );
}

export default App;
