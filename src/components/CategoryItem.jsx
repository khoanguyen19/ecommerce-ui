import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 70vh;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 30px;
  }

  ${mobile({ margin: "5px 0" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #fff;
  margin-bottom: 32px;
`;

const Button = styled.button`
  padding: 10px 24px;
  font-size: 14px;
  background-color: #fff;
  color: #1b1b1b;
  opacity: 0.85;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    opacity: 1;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
