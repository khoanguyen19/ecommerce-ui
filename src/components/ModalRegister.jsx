import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { mobile } from "../responsive";
import { useState } from "react";

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
  text-align: center;

  ${mobile({ fontSize: "18px" })}
`;

const Input = styled.input`
  margin-bottom: 12px;
  padding: 8px;
`;

const Agreement = styled.p`
  margin: 12px 0;
  font-size: 14px;
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

const ModalRegister = ({ closeModal }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  console.log(!password);

  return (
    <Container>
      <CloseButton onClick={closeModal}>
        <CloseIcon style={{ fontSize: "32px" }} />
      </CloseButton>
      <Title>CREATE AN ACCOUNT</Title>
      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Fullname" />
        <Input placeholder="Phone" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Address" type="text" />
        <Input
          onChange={(e) => handlePasswordChange(e)}
          placeholder="Password"
          type="password"
        />
        <Input placeholder="Confirm Password" type="password" />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button type="button" disabled={!password} onClick={handleClick}>
          CREATE
        </Button>
      </Form>
    </Container>
  );
};

export default ModalRegister;
