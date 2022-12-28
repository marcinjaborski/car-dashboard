import React from "react";
import "./App.css";
import { Box, IconButton, Paper } from "@mui/material";
import { VolumeUp, SkipNext } from "@mui/icons-material";
import { Link, Route, Routes } from "react-router-dom";
import Radio from "./Components/Radio";
import Navi from "./Components/Navi";
import CarSettings from "./Components/CarSettings";
import NavigationIcon from "@mui/icons-material/Navigation";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const App = () => {
  return (
    <Paper className="interface">
      <Box className="buttons">
        <div className="dial"></div>
        <VolumeUp />
      </Box>
      <Paper className="display">
        <Box sx={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Navi />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/settings" element={<CarSettings />} />
          </Routes>
        </Box>
        <Box className="nav">
          <Link to="/">
            <IconButton>
              <NavigationIcon />
            </IconButton>
          </Link>
          <Link to="/radio">
            <IconButton>
              <MusicNoteIcon />
            </IconButton>
          </Link>
          <Link to="/settings">
            <IconButton>
              <DirectionsCarIcon />
            </IconButton>
          </Link>
        </Box>
      </Paper>
      <Box className="buttons">
        <div className="dial"></div>
        <SkipNext />
      </Box>
    </Paper>
  );
};

export default App;
