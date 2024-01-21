import React from "react";
import { Container } from "./style";
import WindowButtons from "./window-buttons/window-buttons";

interface WindowProps {
  children: React.ReactNode;
  className?: string;
}

const Window: React.FC<WindowProps> = ({ children, className }) => {
  return (
    <Container className={`${className} p-3 `}>
      <WindowButtons className="mb-4" />
      <div className="px-4">{children}</div>
    </Container>
  );
};

export default Window;
