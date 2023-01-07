import { Box, Divider, Slider } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const CarSettings = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
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
      <Slider defaultValue={30} sx={{ color: "crimson", mt: 3 }} />
    </Box>
  );
};

export default CarSettings;
