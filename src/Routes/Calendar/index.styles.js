import styled from "styled-components";

export const BigContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MiniContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-left: 4px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 32px;
`;

export const RowContainer = styled(BigContainer)`
  width: 100%;
`;

export const CellBox = styled.div`
  width: 100px;
  height: 80px;
  display: grid;
  grid-template-rows: 33% 33% auto;
  padding: 8px;
  border: 3px solid black;
  margin: 3px;
  transition-duration: 200ms;
  cursor: pointer;

  grid-template-areas:
    "header"
    "one"
    "two"
    "three";

  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 1);
  border-radius: 8px;

  &:hover {
    border: 3px solid ${(props) => props.userColor};
    box-shadow: 4px 4px 0px 1px ${(props) => props.userColor};
  }
`;

export const NumberContainer = styled.div`
  grid-area: header;
  display: flex;
  justify-content: flex-end;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconInitials = styled.h4`
  font-family: monospace;
  display: none;
`;

export const Icon = styled.div`
  visibility: ${(props) => (props.isHidden ? "hidden" : "default")};
`;

export const MouseContainer = styled.div`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`;

export const MouseInitial = styled.h3`
  color: ${(props) => props.color};
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
`;
