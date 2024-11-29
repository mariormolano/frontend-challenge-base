import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number; fontsize: string },
): JSX.Element => {
  const { value, fontsize } = props;
  let percentageColor: object = { color: "black" };
  if (value > 0) {
    percentageColor = { color: "red" };
  }
  if (value > 33) {
    percentageColor = { color: "yellow" };
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
          sx={{ color: "white", fontSize: fontsize }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
