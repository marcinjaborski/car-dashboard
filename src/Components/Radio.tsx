import {
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Slider,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useState } from "react";

type Song = {
  name: string;
  artist: string;
  coverPath: string;
};

const songs: Song[] = [
  {
    name: "na okrągło",
    artist: "Kuban",
    coverPath: "cover1.png",
  },
  {
    name: "Beggin’",
    artist: "Måneskin",
    coverPath: "cover2.png",
  },
  {
    name: "GUGU x 2115",
    artist: "2115, Szpaku, Chivas",
    coverPath: "cover3.png",
  },
  {
    name: "kupić jej gaz czy torebkę?",
    artist: "Chivas",
    coverPath: "cover4.png",
  },
  {
    name: "Na Raz",
    artist: "Malik Montana",
    coverPath: "cover5.png",
  },
];

const Radio = () => {
  const [paused, setPaused] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  return (
    <Box className="radio-wrap">
      <Box className="player" sx={{ padding: 2 }}>
        <img
          className="cover"
          src={songs[currentSong].coverPath}
          alt="Kuban - na okrągło"
        />
        <Box
          sx={{ display: "flex", padding: 3, justifyContent: "space-between" }}
        >
          <div>
            <Typography variant="h5">
              {songs[currentSong].name.length > 18
                ? songs[currentSong].name.substring(0, 18) + "..."
                : songs[currentSong].name}
            </Typography>
            <Typography variant="h6">{songs[currentSong].artist}</Typography>
          </div>
          <IconButton>
            <FavoriteIcon color="inherit" />
          </IconButton>
        </Box>
        <Slider defaultValue={50} color="secondary" />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton>
            <ShuffleIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              if (currentSong === 0) {
                setCurrentSong(songs.length - 1);
                return;
              }
              setCurrentSong(currentSong - 1);
            }}
          >
            <SkipPreviousIcon sx={{ fontSize: "50px" }} />
          </IconButton>
          <IconButton onClick={() => setPaused((prevState) => !prevState)}>
            {paused ? (
              <PlayCircleFilledWhiteIcon sx={{ fontSize: "80px" }} />
            ) : (
              <PauseCircleIcon sx={{ fontSize: "80px" }} />
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              if (currentSong === songs.length - 1) {
                setCurrentSong(0);
                return;
              }
              setCurrentSong(currentSong + 1);
            }}
          >
            <SkipNextIcon sx={{ fontSize: "50px" }} />
          </IconButton>
          <IconButton>
            <RepeatIcon />
          </IconButton>
        </Box>
      </Box>
      <List sx={{ width: "100%" }}>
        {songs.map((song, index) => (
          <ListItemButton
            selected={currentSong === index}
            onClick={() => setCurrentSong(index)}
            key={index}
          >
            <ListItemText>
              {song.name} - {song.artist}
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Radio;
