import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorMapper } from "../../Components/colors";
import { useUserContext } from "../../Context/User";
import { MouseContainer, MouseInitial } from "./index.styles";

const Mouse = ({ cursorInitial, index }) => {
  const { guests, user } = useUserContext();

  if (index >= guests.length) return null;

  if (index === user?.index) return null;

  return (
    <MouseContainer left={guests[index].mouse.x} top={guests[index].mouse.y}>
      <FontAwesomeIcon icon={faMousePointer} color={colorMapper[index]} />
      <MouseInitial color={colorMapper[index]}>{cursorInitial}</MouseInitial>
    </MouseContainer>
  );
};

export default Mouse;
