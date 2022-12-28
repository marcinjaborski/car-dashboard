import { Box, Button, Slider, Switch } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import WarningIcon from "@mui/icons-material/Warning";
import PersonIcon from "@mui/icons-material/Person";
import CropDinIcon from "@mui/icons-material/CropDin";

const CarSettings = () => {
  return (
    <Box sx={{ width: "50%", margin: "auto" }}>
      <Box sx={{ display: "flex" }}>
        <Button>
          <PowerSettingsNewIcon />
        </Button>
        <Switch defaultChecked />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button>
          <WarningIcon />
        </Button>
        <Switch />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button>
          <AcUnitIcon />
        </Button>
        <Slider defaultValue={30} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button>
          <PersonIcon />
        </Button>
        <Slider defaultValue={60} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button>
          <CropDinIcon />
        </Button>
        <Switch />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button>
          <CropDinIcon />
        </Button>
        <Switch />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button>
          <CropDinIcon />
        </Button>
        <Switch defaultChecked />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button>
          <CropDinIcon />
        </Button>
        <Switch defaultChecked />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button>
          <CropDinIcon />
        </Button>
        <Switch />
      </Box>
    </Box>
  );
};

export default CarSettings;
