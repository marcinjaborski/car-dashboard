import { Box, Paper } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const SPEED_INCREMENT = 1;
const MAX_SPEED = 260;
const RPM_INCREMENT = 0.2;

const Gauges = () => {
  const [rpm, setRpm] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isAccelerating, setIsAccelerating] = useState(false);
  const [gear, setGear] = useState(1);
  const [blinker, setBlinker] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "ArrowUp") {
        setIsAccelerating(true);
      }
      if (evt.key === "ArrowLeft") {
        setBlinker((prevState) => (prevState === "left" ? null : "left"));
      }
      if (evt.key === "ArrowRight") {
        setBlinker((prevState) => (prevState === "right" ? null : "right"));
      }
    };
    const onKeyUp = (evt: KeyboardEvent) => {
      if (evt.key === "ArrowUp") {
        setIsAccelerating(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAccelerating) {
        setVelocity((prevState) =>
          Math.min(prevState + SPEED_INCREMENT, MAX_SPEED)
        );
        if (rpm > 6 && gear < 6) {
          setGear((prevState) => prevState + 1);
          setRpm((prevState) => Math.min(prevState + RPM_INCREMENT - 4, 8));
        } else {
          setRpm((prevState) => Math.min(prevState + RPM_INCREMENT, 8));
        }
      } else {
        setVelocity((prevState) => Math.max(prevState - SPEED_INCREMENT, 0));
        if (rpm < 1.5 && gear > 1) {
          setGear((prevState) => prevState - 1);
          setRpm((prevState) => Math.max(prevState - RPM_INCREMENT + 4, 0));
        } else {
          setRpm((prevState) => Math.max(prevState - RPM_INCREMENT, 0));
        }
      }
    }, 60);

    return () => clearInterval(interval);
  }, [gear, isAccelerating, rpm]);

  return (
    <Paper className="gauges">
      <Box sx={{ width: 525, position: "relative" }}>
        {blinker === "left" ? (
          <NavigateBeforeIcon className="blinker left" />
        ) : null}
        <GaugeChart
          className="speed"
          nrOfLevels={26}
          formatTextValue={(v) => `${Math.round(Number(v) / 0.38)} km/h`}
          percent={velocity / 260}
          animate={false}
          colors={["#228b22", "#dc143c"]}
          style={{ width: 525, height: 236 }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{ color: "crimson" }}
            size={150}
            value={40}
            variant="determinate"
          />
          <LocalGasStationIcon
            sx={{
              color: "crimson",
              fontSize: 80,
              position: "absolute",
            }}
          />
        </Box>
        <img src="lights.svg" alt="lights" width={40} className="lights-icon" />
      </Box>
      <Box
        sx={{
          width: 50,
          height: 225,
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {[...Array(6)].map((_, index) => (
          <Paper
            key={index}
            sx={{
              height: 25,
              width: 35,
              backgroundColor: index < gear ? "crimson" : "lightgray",
            }}
          />
        ))}
      </Box>
      <Box sx={{ width: 525, position: "relative" }}>
        {blinker === "right" ? (
          <NavigateNextIcon className="blinker right" />
        ) : null}
        <GaugeChart
          className="rpm"
          nrOfLevels={8}
          formatTextValue={(v) => `${Math.round(Number(v) / 1.25) / 10}rpm`}
          percent={rpm / 8}
          animate={false}
          colors={["#228b22", "#dc143c"]}
          style={{ width: 525, height: 236 }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{ color: "crimson" }}
            size={150}
            value={20}
            variant="determinate"
          />
          <LocalFireDepartmentIcon
            sx={{
              color: "crimson",
              fontSize: 80,
              position: "absolute",
            }}
          />
        </Box>
        <img
          src="seat-belt.svg"
          alt="seat belts"
          width={40}
          className="seat-belt-icon"
        />
      </Box>
    </Paper>
  );
};
export default Gauges;
