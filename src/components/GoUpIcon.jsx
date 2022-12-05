import React, { useState } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { IconButton } from "@mui/material";

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
    <>
      {showIcon && (
        <IconButton
          variant="contained"
          size="small"
          sx={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            height: "50px",
            width: "50px",
            backgroundColor: "secondary.main",
            color: "white",
            "&:hover, &.Mui-focusVisible": {
              transition: "0.3s",
              backgroundColor: "#5687ac",
            },
          }}
          onClick={goUp}
        >
          <ArrowUpwardRoundedIcon />
        </IconButton>
      )}
    </>
  );
};

export default GoUpIcon;
