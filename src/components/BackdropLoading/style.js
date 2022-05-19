import styled from "styled-components";

export const BackDrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;
