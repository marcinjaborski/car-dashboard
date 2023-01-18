import { Box, Divider, Slider } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import { useState } from "react";

const CarSettings = () => {
  const [temperature, setTemperature] = useState(33);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box sx={{ height: 300, mr: 3 }}>
        <ThermostatIcon fontSize="large" />
        <Slider
          orientation="vertical"
          value={temperature}
          onChange={(event, value) => setTemperature(value as number)}
          sx={{
            color:
              temperature < 33
                ? "cyan"
                : temperature < 66
                ? "orange"
                : "crimson",
            mt: 3,
            ".MuiSlider-markLabel": {
              color: "white",
            },
          }}
          marks={[
            { value: 0, label: "16°C" },
            { value: 33, label: "19°C" },
            { value: 66, label: "22°C" },
            { value: 100, label: "25°C" },
          ]}
        />
      </Box>
      <Box className="big-button">
        <img
          src="windshield.png"
          alt="windshield"
          className="windshield-icon"
        />
        <Box className="inner-buttons">
          <AcUnitIcon sx={{ fontSize: 80 }} />
          <Divider />
          <img
            src="recirculation.png"
            alt="recirculation"
            className="recirculation-icon"
          />
        </Box>
      </Box>
      <Box sx={{ height: 300, mr: 3 }}>
        <Slider
          orientation="vertical"
          defaultValue={50}
          sx={{
            ml: 3,
            mt: 3,
            ".MuiSlider-markLabel": {
              color: "white",
            },
          }}
          step={33}
          marks={[
            { value: 0, label: "off" },
            { value: 33, label: "1" },
            { value: 66, label: "2" },
            { value: 100, label: "3" },
          ]}
        />
        <img
          src="air.png"
          alt="fan"
          width={35}
          style={{ filter: "invert(1)" }}
        />
      </Box>
    </Box>
  );
};

export default CarSettings;
