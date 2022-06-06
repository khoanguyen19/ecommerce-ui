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
  background-color: #afa7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
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
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-shrink: 0;
  position: relative;

  ${mobile({ height: "75vh" })}
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 90%;

  ${mobile({ width: "100%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;

  ${mobile({
    position: "absolute",
    left: 0,
    bottom: "10px",
    padding: "30px",
  })}
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 500;
  color: #212529;

  ${mobile({
    fontSize: "40px",
    color: "#fff",
    textShadow: "3px 3px 2px #000",
  })}
`;
const Desc = styled.p`
  margin: 50px 0;
  font-weight: 400;

  ${mobile({
    color: "#fff",
    textShadow: "2px 1px 1px #000",
    fontSize: "14px",
    margin: "30px 0",
  })}
`;
const Button = styled.button`
  width: 100px;
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #212529;
  border-color: #212529;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: #000;
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
        <ArrowForwardIosIcon style={{ fontSize: 14 }}></ArrowForwardIosIcon>
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {slideItems.map((item) => (
          <Slide key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="back" onClick={() => handleClick("back")}>
        <ArrowBackIosNewIcon style={{ fontSize: 14 }}></ArrowBackIosNewIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
