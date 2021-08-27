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
    padding: 0 1vw;

    &:hover {
        border: 3px solid ${(props) => props.userColor};
        box-shadow: 4px 4px 0px 1px ${(props) => props.userColor};
      }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`;

export const Button = styled.input`
    width: 100px;
    cursor: pointer;
    border: none;
    background-color: antiquewhite;
    border-radius: 5px;
    text-align: center;
    &:hover {
        background-color: ${(props) => props.userColor};
      }
`;

export const Footer = styled.div`
    width: 100%;
    height: 10%;
`;

