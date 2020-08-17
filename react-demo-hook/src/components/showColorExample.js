import React from "react";
import ColorText from './ColorText';
import ChangeButton from './ChangeColorButton';
import { ColorContextWrapper } from "./ColorContextWrapper";

function ShowColorExample() {
  return (
    <div>
      <ColorContextWrapper>
        <ColorText />
        <ChangeButton />
      </ColorContextWrapper>
    </div>
  )
}

export default ShowColorExample
