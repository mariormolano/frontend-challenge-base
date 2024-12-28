import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number; textsize: string },
): JSX.Element => {
  const { value, textsize } = props;
  let percentageColor: object = { color: "black" };
  if (value > 0) {
    percentageColor = { color: "red" };
  }
  if (value > 33) {
    percentageColor = { color: "orange" };
  }
  if (value > 66) {
    percentageColor = { color: "green" };
  }
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress sx={percentageColor} variant="determinate" {...props} />
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
          {props.value ? `${Math.round(props.value)}%` : "NR"}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
