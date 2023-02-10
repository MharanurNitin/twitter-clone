import { Button } from "@mui/material";
import React from "react";
import "./TwitterButton.css";

function TwitterButton({
  keys,
  onClickAction,
  btnText,
  type,
  variant,
  btnStyle,
}) {
  return (
    <div>
      {/* Button -> Tweet */}
      <button
        key={keys}
        onClick={onClickAction}
        variant={variant}
        className={`${btnStyle}`}
      >
        {btnText}
      </button>
    </div>
  );
}

export default TwitterButton;
