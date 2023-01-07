import { Box, IconButton, Paper } from "@mui/material";
import { SkipNext, VolumeUp } from "@mui/icons-material";
import { Link, Route, Routes } from "react-router-dom";
import Navi from "./Navi";
import Radio from "./Radio";
import CarSettings from "./CarSettings";
import NavigationIcon from "@mui/icons-material/Navigation";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import React from "react";

const Interface = () => {
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

export default Interface;
