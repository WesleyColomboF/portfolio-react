import React from "react";
import { Buttom } from "./style";

interface WindowButtonsProps {
  className?: string;
}

const WindowButtons: React.FC<WindowButtonsProps> = ({ className }) => {
  return (
    <div className={className}>
      <Buttom type="close" />
      <Buttom className="mx-1" type="minimize" />
      <Buttom type="full" />
    </div>
  );
};

export default WindowButtons;
