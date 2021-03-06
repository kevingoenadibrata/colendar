import {
  faCheck,
  faCircle,
  faQuestion,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { colorMapper } from "../../Components/colors";
import { useUserContext } from "../../Context/User";
import { CellBox, Icon, IconContainer, NumberContainer } from "./index.styles";

const Cell = ({ value, hovered }) => {
  const { user, guests, setCalendarIcon, getDateData } = useUserContext();

  const toggle = () => {
    if (value === "") return;
    const dateData = getDateData(value);
    const index = guests[user.id].index;
    setCalendarIcon(value, (dateData[index] + 1) % 5);
  };

  const getIcon = (i) => {
    switch (getDateData(value)[i]) {
      case 0:
        return faCircle;
      case 1:
        return faCheck;
      case 2:
        return faStar;
      case 3:
        return faTimes;
      case 4:
        return faQuestion;
      default:
        return faCircle;
    }
  };
  return (
    <CellBox onClick={toggle} userColor={guests[user.id]?.color}>
      <NumberContainer>
        <h4>{value}</h4>
      </NumberContainer>
      <IconContainer>
        <Icon
          isHidden={getDateData(value)[0] === 0}
          active={hovered === 0 || hovered === getDateData(value)[0]}
        >
          <FontAwesomeIcon
            icon={getIcon(0)}
            color={colorMapper[0]}
            size="sm"
            fixedWidth
          />
        </Icon>
        <Icon
          isHidden={getDateData(value)[1] === 0}
          active={hovered === 0 || hovered === getDateData(value)[1]}
        >
          <FontAwesomeIcon
            icon={getIcon(1)}
            color={colorMapper[1]}
            size="sm"
            fixedWidth
          />
        </Icon>
        <Icon
          isHidden={getDateData(value)[2] === 0}
          active={hovered === 0 || hovered === getDateData(value)[2]}
        >
          <FontAwesomeIcon
            icon={getIcon(2)}
            color={colorMapper[2]}
            size="sm"
            fixedWidth
          />
        </Icon>
      </IconContainer>

      <IconContainer>
        <Icon
          isHidden={getDateData(value)[3] === 0}
          active={hovered === 0 || hovered === getDateData(value)[3]}
        >
          <FontAwesomeIcon
            icon={getIcon(3)}
            color={colorMapper[3]}
            size="sm"
            fixedWidth
          />
        </Icon>
        <Icon
          isHidden={getDateData(value)[4] === 0}
          active={hovered === 0 || hovered === getDateData(value)[4]}
        >
          <FontAwesomeIcon
            icon={getIcon(4)}
            color={colorMapper[4]}
            size="sm"
            fixedWidth
          />
        </Icon>
        <Icon
          isHidden={getDateData(value)[5] === 0}
          active={hovered === 0 || hovered === getDateData(value)[5]}
        >
          <FontAwesomeIcon
            icon={getIcon(5)}
            color={colorMapper[5]}
            size="sm"
            fixedWidth
          />
        </Icon>
      </IconContainer>
    </CellBox>
  );
};

const memoComparison = (prev, next) => {
  return prev.value !== next.value;
};

export default React.memo(Cell, memoComparison);
