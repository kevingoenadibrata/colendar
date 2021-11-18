import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  align-items: center;
  display: flex;
  padding: 0 2vw;
`;

export const Body = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  padding: 0 2vw;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 4vw;
`;

export const Input = styled.input`
  border-radius: 8px;
  outline: none;
  text-align: center;
  margin-right: 12px;
  height: 100%;
  width: 300px;

  border: 3px solid ${(props) => props.color};
  transition-duration: 100ms;

  &:hover {
    box-shadow: 4px 4px 0px 1px ${(props) => props.color};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`;

export const InviteButtonContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Button = styled.button`
  padding: 12px 32px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  text-align: center;
  transition-duration: 200ms;
  border: 3px solid ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.color};
    border: 3px solid white;
    box-shadow: 4px 4px 0px 1px ${(props) => props.color};
  }

  > h3 {
    color: white;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
`;
