import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { login } from "../redux/callApis";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  border-radius: 5px;
  position: relative;

  ${mobile({ padding: "40px 30px" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Link = styled.a`
  font-size: 14px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  font-size: 14px;
  margin: 5px 0;
  font-style: italic;
  color: #eb1c1c;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 12px;
  margin-top: 10px;
  font-size: 14px;
  border-radius: 3px;
  color: #fff;
  background-color: #212529;
  border-color: #212529;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #000;
  }

  &:active {
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.9);
  }
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 30px;

  ${mobile({ right: "20px" })}
`;

const ModalLogin = ({ closeModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const { currentUser, isFetching, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setValid(true);
      login(dispatch, { username, password });
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    currentUser && closeModal();
  }, [currentUser, closeModal]);

  return (
    <Container>
      <CloseButton onClick={closeModal}>
        <CloseIcon style={{ fontSize: "32px" }} />
      </CloseButton>
      <Title>SIGN IN</Title>
      <Form>
        <Input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        {error && <Error>Something went wrong... </Error>}
        {!valid && <Error>You need to enter your username or password!</Error>}
        <Link>Forgot your password?</Link>
        <Link>Create an account</Link>
        <Button onClick={handleLogin} disabled={isFetching}>
          LOG IN
        </Button>
      </Form>
    </Container>
  );
};

export default ModalLogin;
