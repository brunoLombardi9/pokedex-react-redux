import React, { useState } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { Button } from "@mui/material";

const GoUpIcon = () => {
  const [showIcon, setShowIcon] = useState(false);

  function goUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function iconHandler() {
    const top = window.scrollY;
    const scrollLimit = 250;

    if (top < scrollLimit && showIcon) setShowIcon(false);
    if (top > scrollLimit && showIcon === false) setShowIcon(true);
  }

  window.onscroll = () => iconHandler();

  return (
    <Button
      variant="contained"
      sx={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        height: "50px",
        width: "50px",
        borderRadius: "100px",
        display: showIcon ? "flex" : "none",
        backgroundColor: "secondary.main",
      }}
      onClick={goUp}
    >
      <ArrowUpwardRoundedIcon />
    </Button>
  );
};

export default GoUpIcon;
