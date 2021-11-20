import {
  faCheck,
  faTimes,
  faQuestion,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Pane } from "evergreen-ui";

const HoverIcons = ({ handleMouseEnter, handleMouseLeave }) => {
  return (
    <Pane display="flex" padding={16}>
      <Pane margin={4}>
        <FontAwesomeIcon
          icon={faCheck}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </Pane>
      <Pane margin={4}>
        <FontAwesomeIcon
          icon={faStar}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </Pane>
      <Pane margin={4}>
        <FontAwesomeIcon
          icon={faTimes}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </Pane>
      <Pane margin={4}>
        <FontAwesomeIcon
          icon={faQuestion}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave()}
        />
      </Pane>
    </Pane>
  );
};

export default HoverIcons;
