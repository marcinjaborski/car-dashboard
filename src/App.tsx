import React, { useState } from "react";
import "./App.css";
import Gauges from "./Components/Gauges";
import Interface from "./Components/Interface";
import { Fab } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const App = () => {
  const [showClocks, setShowClocks] = useState(true);

  return (
    <>
      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: 50, right: 50 }}
        onClick={() => setShowClocks(!showClocks)}
      >
        <CompareArrowsIcon />
      </Fab>
      {showClocks ? <Gauges /> : <Interface />}
    </>
  );
};

export default App;
