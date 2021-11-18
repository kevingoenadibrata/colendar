import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OilFieldIcon, Spinner, toaster } from "evergreen-ui";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { colorMapper } from "../../Components/colors";
import { useUserContext } from "../../Context/User";
import { getRoomInfo } from "../../Fetchers";
import { Button } from "../Home/index.styles";
import {
  Container,
  FormCard,
  FormContainer,
  Input,
  RegisterContainer,
  TitleContainer,
} from "./index.styles";

const Preroom = () => {
  const { refreshToken, user } = useUserContext();
  const [initials, setInitials] = useState(user?.initials || "");
  const [roomData, setRoomData] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const fetchData = async () => {
    try {
      const res = await getRoomInfo(id);
      console.log(res);
      setRoomData(res);
      setIsLoading(false);
    } catch (e) {
      toaster.danger("Invalid Room");
      history.push("/");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (initials.length === 2) {
      await refreshToken(initials);
      history.push(`/${id}`);
    } else {
      toaster.danger("Initials must be a length of 2");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <RegisterContainer>
      <FormCard>
        <TitleContainer>
          <div>
            <h4>Roomcode</h4>
            <h1>{id}</h1>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserFriends} />
            <h2>{roomData?.occupied}/6</h2>
          </div>
        </TitleContainer>
        <FormContainer>
          <p>Initials</p>
          <Container>
            <Input
              maxLength="2"
              onChange={(e) => setInitials(e.target.value)}
              value={initials}
            />
            <Button color={colorMapper[0]} onClick={handleSubmit}>
              <h3>Enter Room</h3>
            </Button>
          </Container>
        </FormContainer>
      </FormCard>
    </RegisterContainer>
  );
};

export default Preroom;
