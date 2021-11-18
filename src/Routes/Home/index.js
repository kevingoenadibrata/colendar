import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

import { colorMapper } from "../../Components/colors";
import {
  HomeContainer,
  Header,
  Body,
  LeftContainer,
  Input,
  Button,
  ButtonContainer,
  Footer,
  ButtonWithBackground,
  InviteButtonContainer,
} from "./index.styles";
import axios from "axios";
import { useUserContext } from "../../Context/User";
import { useState } from "react";
import { PENDING_CREATE, PENDING_JOIN } from "../../Context/constants";
import { fetchNewRoom } from "../../Fetchers";

const Home = () => {
  const history = useHistory();
  const { token, setRoomcodePending, setPendingAction } = useUserContext();
  const [joinRoomCode, setJoinRoomCode] = useState("");

  const handleCreateRoom = async () => {
    const roomcode = await fetchNewRoom();
    history.push(`/p/${roomcode}`);
  };

  const handleJoinRoom = () => {
    history.push(`/p/${joinRoomCode}`); //todo dont directly redirect
  };

  return (
    <HomeContainer>
      <Header>
        <FontAwesomeIcon icon={faCalendarCheck} fixedWidth />
        <h2>Colendar</h2>
      </Header>
      <Body>
        <LeftContainer>
          <h1>Landing Title Goes Here</h1>
          <ButtonContainer>
            <Button onClick={handleCreateRoom} color={colorMapper[0]}>
              <h3>Create a new room</h3>
            </Button>
            <InviteButtonContainer>
              <Input
                name="code"
                id="code"
                type="text"
                onChange={(e) => setJoinRoomCode(e.target.value)}
                value={joinRoomCode}
                color={colorMapper[0]}
                placeholder="Enter code to enter"
              />
              <Button onClick={handleJoinRoom} type="submit" color="black">
                <h3>Join Room</h3>
              </Button>
            </InviteButtonContainer>
          </ButtonContainer>
        </LeftContainer>
      </Body>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;
