import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import { colorMapper } from "../../Components/colors";
import { HomeContainer, Header, Body, LeftContainer, Input, Button, ButtonContainer, Footer, ButtonWithBackground, InviteButtonContainer } from './index.styles';

const Home = () => {
  const history = useHistory();

  const getRandomCode = (chars) => {
    let result = '';
    for(let i = 0; i < 32; i++ ){
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  return (
    <HomeContainer>
      <Header>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          size="2x"
          fixedWidth
        />
        <h2 style={{marginLeft: '0.5vw'}}>Colendar</h2>
      </Header>
      <Body>
        <LeftContainer>
          <h1 style={{marginBottom: '2vh'}}>Plan ahead, <br/> together.</h1> 
          <ButtonContainer>
            <ButtonWithBackground onClick={()=> history.push(`/${getRandomCode('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')}`)} color={colorMapper[0]}>Create new room</ButtonWithBackground>
            <InviteButtonContainer>
              <Input name="code" id="code" type="text" color={colorMapper[0]} placeholder="Enter code to enter"/>
              <Button onClick={()=> history.push(`/${document.getElementById("code").value}`)} type="submit" color={colorMapper[0]}>Enter</Button>
            </InviteButtonContainer>
          </ButtonContainer>
        </LeftContainer>
      </Body>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;
