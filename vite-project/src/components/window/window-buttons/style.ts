import styled from "styled-components";
enum buttonTypes {
  close = "#FF5F57",
  full = "#28C840",
  minimize = "#FDBC2C",
}

export const Buttom = styled.button<{
  type: "close" | "full" | "minimize";
}>`
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => buttonTypes[props.type]};
`;
