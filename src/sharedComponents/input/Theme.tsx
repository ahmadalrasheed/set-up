import styled, { css } from "styled-components";

export const InputElement = styled.input<any>`
  border: 1px solid #dfe1e5;
  box-sizing: border-box;
  height: 45px;
  border-radius: 5px;
  padding: 0 20px;
  width: 100%;
  font-size: 16px;
  margin-top: 3px;

  &:focus {
    border: 1px solid #22224a;
    outline: none;
  }

  &:disabled {
    border: none;
    background-color: #ebebe4;
    cursor: not-allowed;
  }
`;
export const Label = styled.label<any>`
  font-size: 18px;
  white-space: nowrap;
  ${(props) =>
    props.required &&
    css`
      &:after {
        content: "*";
        color: red;
      }
    `}
`;
export const InputElementContainer = styled.div<any>`
  width: 100%;
  position: relative;
`;
export const EyeContainer = styled.div<any>`
  position: absolute;
  top: 55%;
  right: 2%;
  cursor: pointer;
`;
export const Body = styled.div<any>`
  width: 100%;
`;
