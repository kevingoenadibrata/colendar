import styled from 'styled-components';

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
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 4vw;
`;

export const Input = styled.input`
    border-radius: 5px;
    height: 40px;
    width: 200px;
    outline: none;
    text-align: center;
    margin-right: 1vw;

    &:hover {
        border: 3px solid ${(props) => props.color};
        box-shadow: 4px 4px 0px 1px ${(props) => props.color};
      }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    height: 33%;
`;

export const InviteButtonContainer = styled(ButtonContainer)`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`;

export const Button = styled.button`
    width: 150px;
    height: 40px;
    cursor: pointer;
    border: none;
    background-color: antiquewhite;
    border-radius: 5px;
    text-align: center;
    &:hover {
        background-color: ${(props) => props.color};
      }
`;

export const Footer = styled.div`
    width: 100%;
    height: 10%;
`;

export const ButtonWithBackground = styled(Button)`
    background-color: ${(props) => props.color};
    width: 100%;
`;

