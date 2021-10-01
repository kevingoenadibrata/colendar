import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorMapper } from "../../Components/colors";
import { useUserContext } from "../../Context/User";
import { BigContainer, MiniContainer, StyledContainer } from "./index.styles";
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

const HEADERS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const NAMES = ["KG", "EL", "SH", "DH", "JJ", "AH"];

const Calendar = () => {
  const { guests, moveMouse } = useUserContext();

  const handleMouseMove = (e) => {
    moveMouse(e.clientX, e.clientY);
  };

  return (
    <BigContainer onMouseMove={handleMouseMove}>
      {NAMES.map((item, index) => (
        <Mouse cursorInitial={item} index={index} />
      ))}
      <StyledContainer>
        {TEMPLATE.map((item) => (
          <Row cells={item} />
        ))}
      </StyledContainer>
      <StyledContainer>
        {guests.map((item) => (
          <MiniContainer>
            <FontAwesomeIcon icon={faUser} color={colorMapper[item.index]} />
            <h3 style={{ color: colorMapper[item.index] }}>
              {NAMES[item.index]}
            </h3>
          </MiniContainer>
        ))}
      </StyledContainer>
    </BigContainer>
  );
};

export default Calendar;
