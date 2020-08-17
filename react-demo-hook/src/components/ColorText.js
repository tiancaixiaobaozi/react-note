import React, { useContext } from "react";
import { ColorContextWrapper } from "./ColorContextWrapper";

function ColorText() {
  const { color } = useContext(ColorContextWrapper)
  return (
    <div style={{ color }}>字体颜色:{color}</div>
  )
}

export default ColorText
