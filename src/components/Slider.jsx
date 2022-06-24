import { useState } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { slideItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 80px;

  ${mobile({ height: "75vh" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  /* background-color: #afa7a7; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "back" && "10px"};
  right: ${(props) => props.direction === "next" && "10px"};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    transform: scale(0.9);
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  flex-shrink: 0;
  position: relative;

  ${mobile({ height: "75vh" })}
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  position: absolute;

  ${mobile({ top: "20px" })}
`;

const InfoContainer = styled.div`
  width: 400px;
  top: 40%;
  left: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  position: absolute;
  z-index: 1;

  ${mobile({
    position: "absolute",
    left: 0,
    bottom: "10px",
    padding: "30px",
  })}
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
  ${mobile({
    fontSize: "40px",
    color: "#fff",
    textShadow: "3px 3px 2px #000",
  })};
`;
const Desc = styled.p`
  margin: 20px 0;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  text-shadow: 0 1.5px 1.5px rgba(0, 0, 0, 0.6);

  ${mobile({
    color: "#fff",
    textShadow: "2px 1px 1px #000",
    fontSize: "14px",
    margin: "30px 0",
  })};
`;
const Button = styled.button`
  width: 140px;
  padding: 12px 24px;
  font-size: 14px;
  background-color: #fff;
  border: none;
  color: #1b1b1b;
  opacity: 0.85;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    opacity: 1;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "next") {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    }
  };

  return (
    <Container>
      <Arrow direction="next" onClick={() => handleClick("next")}>
        <ArrowForwardIosIcon
          style={{ fontSize: 40, color: "#fff" }}
        ></ArrowForwardIosIcon>
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((item) => (
          <Slide key={item.id}>
            <ImageContainer
              style={{ backgroundImage: `url(${item.img})` }}
            ></ImageContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="back" onClick={() => handleClick("back")}>
        <ArrowBackIosNewIcon
          style={{ fontSize: 40, color: "#fff" }}
        ></ArrowBackIosNewIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
