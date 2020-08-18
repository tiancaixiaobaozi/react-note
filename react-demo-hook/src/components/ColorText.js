import React, { useContext } from "react";
import { ColorContext } from "./ColorContextWrapper";

function ColorText() {
  const { color } = useContext(ColorContext)
  return (
    <div style={{ color }}>字体颜色:{color}</div>
  )
}

export default ColorText
