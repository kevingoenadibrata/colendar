import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { colorMapper } from "../../Components/colors";
import { useUserContext } from "../../Context/User";
import { MouseContainer, MouseInitial } from "./index.styles";

const Mouse = ({ cursorInitial, index }) => {
  const { socket, user } = useUserContext();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    socket.on("updateMouse", (incomingIndex, x, y) => {
      if (incomingIndex === index) {
        setMousePosition({ x, y });
      }
    });
  }, [socket]);

  if (index === user?.index) return null;

  return (
    <MouseContainer left={mousePosition.x} top={mousePosition.y}>
      <FontAwesomeIcon icon={faMousePointer} color={colorMapper[index]} />
      <MouseInitial color={colorMapper[index]}>{cursorInitial}</MouseInitial>
    </MouseContainer>
  );
};

export default Mouse;
