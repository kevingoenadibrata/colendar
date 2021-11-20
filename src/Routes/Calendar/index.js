import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toaster } from "evergreen-ui";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useUserContext } from "../../Context/User";
import { Button } from "../Home/index.styles";
import HoverIcons from "./HoverIcons";
import {
  BigContainer,
  MiniContainer,
  StyledContainer,
  ButtonContainer,
} from "./index.styles";
import Mouse from "./Mouse";
import Row from "./Row";

const TEMPLATE = [
  ["", "", "", "1", "2", "3", "4"],
  ["5", "6", "7", "8", "9", "10", "11"],
  ["12", "13", "14", "15", "16", "17", "18"],
  ["19", "20", "21", "22", "23", "24", "25"],
  ["26", "27", "28", "30", "31", "", ""],
  ["", "", "", "", "", "", ""],
];

const Calendar = () => {
  const {
    user,
    guests,
    moveMouse,
    requestJoinRoom,
    clearCalendar,
    clearMarkings,
  } = useUserContext();
  const { id } = useParams();
  const [pending, setPending] = useState(true);
  const [hovered, setHovered] = useState(0);
  const history = useHistory();

  const handleMouseMove = (e) => {
    if (user) moveMouse(e.clientX, e.clientY);
  };

  const handleMouseEnter = (i) => {
    setHovered(i);
  };

  const handleMouseLeave = () => {
    setHovered(0);
  };

  const fetchData = async () => {
    setPending(true);
    const res = await requestJoinRoom(id);
    if (res) {
      setPending(false);
    } else {
      toaster.danger("Error on joining room");
      history.push(`/p/${id}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (pending) return null;

  return (
    <BigContainer onMouseMove={handleMouseMove}>
      {Object.values(guests).map((item, index) => (
        <Mouse userData={item} index={item.index} key={index} />
      ))}
      <StyledContainer>
        {TEMPLATE.map((item) => (
          <Row cells={item} hovered={hovered} />
        ))}
      </StyledContainer>
      <StyledContainer>
        <HoverIcons
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        {Object.values(guests).map((item) => (
          <MiniContainer>
            <FontAwesomeIcon icon={faUser} color={item.color} />
            <h3 style={{ color: item.color }}>{item.initials}</h3>
          </MiniContainer>
        ))}
        <ButtonContainer>
          <Button onClick={clearMarkings}>Clear My Markings</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={clearCalendar}>Clear Board</Button>
        </ButtonContainer>
      </StyledContainer>
    </BigContainer>
  );
};

export default Calendar;
