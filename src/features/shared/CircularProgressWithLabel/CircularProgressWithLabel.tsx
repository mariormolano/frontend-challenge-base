import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Props {
  value: number;
  textsize: string;
  size: string;
  shadow?: boolean;
}

const CircularProgressWithLabel: React.FC<Props> = ({
  value,
  textsize,
  size,
  shadow,
}) => {
  let percentageColor: object = { color: "black" };
  if (shadow) {
    if (value > 0) {
      percentageColor = {
        color: "#ff3d3d",
        filter: "drop-shadow(0 0 5px #ff3d3d)",
      };
    }
    if (value > 33) {
      percentageColor = {
        color: "#ff9b3d",
        filter: "drop-shadow(0 0 5px #ff9b3d)",
      };
    }
    if (value > 66) {
      percentageColor = {
        color: "#65ff65",
        filter: "drop-shadow(0 0 5px #65ff65)",
      };
    }
  } else {
    if (value > 0) {
      percentageColor = { color: "red" };
    }
    if (value > 33) {
      percentageColor = { color: "orange" };
    }
    if (value > 66) {
      percentageColor = {
        color: "green",
      };
    }
  }
  return (
    <Box
      sx={{ position: "relative", display: "inline-flex", marginTop: "10px" }}
    >
      <CircularProgress
        sx={percentageColor}
        variant="determinate"
        value={value}
        size={size}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "white", fontSize: textsize }}
        >
          {value ? `${Math.round(value)}%` : "NR"}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
