import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 600;
`;

const Success = () => {
  const location = useLocation();
  console.log(location);

  return <Container>Success</Container>;
};

export default Success;
