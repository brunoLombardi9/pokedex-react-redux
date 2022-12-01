import React from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Button } from "@mui/material";

function goUp() {
  const index = document.documentElement;
  index.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const GoUpIcon = () => {
  return (
    <Button
      variant="contained"
      sx={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        height: "50px",
        width: "50px",
        zIndex: "1000",
        borderRadius: "100px",
      }}
      onClick={goUp}
    >
      <ArrowUpwardRoundedIcon />
    </Button>
  );
};

export default GoUpIcon;
