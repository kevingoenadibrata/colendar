import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useUserContext } from "../../Context/User";
import { MouseContainer, MouseInitial } from "./index.styles";

const Mouse = ({ userData, index }) => {
  const { socket, user } = useUserContext();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    socket.on("updateMouse", (incomingId, x, y) => {
      if (incomingId === userData.id) {
        setMousePosition({ x, y });
      }
    });
  }, [socket]);

  if (userData.id === user?.id) return null;

  return (
    <MouseContainer left={mousePosition.x} top={mousePosition.y}>
      <FontAwesomeIcon icon={faMousePointer} color={userData.color} />
      <MouseInitial color={userData.color}>{userData.initials}</MouseInitial>
    </MouseContainer>
  );
};

export default Mouse;
