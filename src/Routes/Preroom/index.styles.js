import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormCard = styled.div`
  padding: 32px;
  border-radius: 8px;
  border: 3px solid ${(props) => props.color};
  box-shadow: 4px 4px 0px 1px ${(props) => props.color};
`;

export const Input = styled.input`
  border-radius: 8px;
  height: 50px;
  width: 100px;
  outline: none;
  text-align: center;
  margin-right: 12px;

  font-size: 1.5em;

  border: 3px solid ${(props) => props.color};
  transition-duration: 100ms;

  &:hover {
    box-shadow: 4px 4px 0px 1px ${(props) => props.color};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FormContainer = styled.div`
  margin-top: 48px;
`;
