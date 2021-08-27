import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { colorMapper } from "../../Components/colors";

import { HomeContainer, Header, Body, LeftContainer, Input, Button, ButtonContainer, Footer } from './index.styles';

const Home = () => {

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
            <Input userColor={colorMapper[0]} placeholder="Enter code to enter room"/>
            <Button userColor={colorMapper[0]} value="Enter"/>
          </ButtonContainer>
        </LeftContainer>
      </Body>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;
