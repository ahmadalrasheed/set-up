import styled, { css } from "styled-components";
import Box from "@mui/material/Box";

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 400px;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 16px;
`;
