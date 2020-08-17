import React, { useContext } from "react";
import { ColorContextWrapper, UPDATE_COLOR } from "./ColorContextWrapper";

export default function ChangeColorButton() {
  const { dispatch } = useContext(ColorContextWrapper)
  return (
    <div>
      <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'red'})}}>红色</button>
      <button onClick={() => {dispatch({type: UPDATE_COLOR, color: 'yellow'})}}>黄色</button>
    </div>
  )
}
