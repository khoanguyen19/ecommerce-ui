import styled from "styled-components";
import { useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useLocation } from "react-router-dom";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px 90px 50px 50px;

  ${mobile({
    flexDirection: "column",
    padding: "0 10px",
    alignItems: "center",
    marginTop: "30px",
  })}
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;

  ${mobile({
    justifyContent: "center",
    marginBottom: "20px",
  })}
`;

const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;

  ${mobile({
    width: "100%",
    height: "50vh",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 30px;

  ${mobile({ padding: "0 10px" })}
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 400;

  ${mobile({ fontSize: "24px" })}
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.5;

  ${mobile({ fontSize: "12px" })}
`;

const Price = styled.p`
  font-size: 20px;
  margin: 40px 0;

  ${mobile({ margin: "32px 0" })}
`;

const FilterContainer = styled.div`
  margin: 20px 0 30px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.h5`
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
  width: 50px;

  ${mobile({
    fontSize: "14px",
    width: "40px",
  })}
`;

const FilterColorWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  padding: 2px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 30%);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 3px rgb(0 0 0 / 20%);
  }

  &.active {
    box-shadow: 0 0 0 2px rgb(0 0 0 / 90%);
  }
`;

const FilterColor = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: inset 0 0 2px 0 rgb(0 0 0 / 80%);
  background-color: ${(props) => props.color};

  ${mobile({
    width: "20px",
    height: "20px",
  })}
`;

const FilterSize = styled.select`
  padding: 5px;

  ${mobile({ padding: "2px" })}
`;

const FilterSizeOption = styled.option``;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  ${mobile({
    width: "20px",
    height: "20px",
    fontSize: "12px",
    margin: "0 5px",
  })}
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 5px;
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

const DetailProduct = () => {
  const dispatch = useDispatch();

  // const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const product = useSelector((state) =>
    state.product.products.find((p) => p._id === id)
  );

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await userRequest.get(`/product/find/${id}`);
  //       setProduct(res.data);
  //       setColor(res.data.color[0]);
  //       setSize(res.data.size[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProduct();
  // }, [id]);

  const numberWithCommas = (x) => {
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleProductQuantity = (type) => {
    type === "decrease"
      ? quantity > 1 && setQuantity(quantity - 1)
      : setQuantity(quantity + 1);
  };

  const handleCartQuantity = () => {
    dispatch(addProduct({ ...product, color, size, quantity }));
  };

  const handleChangeColor = (color) => {
    setColor(color);
  };

  const handleChangeSize = (e) => {
    setSize(e.target.value.toLowerCase());
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{`${numberWithCommas(product.price)} đ`}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colors: </FilterTitle>
              {product.color?.map((c) => {
                let currentColor = c;
                return (
                  <FilterColorWrapper
                    className={c === color ? "active" : ""}
                    key={c}
                    onClick={() => handleChangeColor(currentColor)}
                  >
                    <FilterColor color={c} />
                  </FilterColorWrapper>
                );
              })}
            </Filter>
            <Filter>
              <FilterTitle>Amount: </FilterTitle>
              <AmountContainer>
                <RemoveIcon
                  onClick={() => handleProductQuantity("decrease")}
                  style={{ cursor: "pointer" }}
                />
                <Amount>{quantity}</Amount>
                <AddIcon
                  onClick={() => handleProductQuantity("increase")}
                  style={{ cursor: "pointer" }}
                />
              </AmountContainer>
            </Filter>
          </FilterContainer>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize onChange={handleChangeSize}>
                {product.size?.map((size) => (
                  <FilterSizeOption key={size}>
                    {size.toUpperCase()}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <Button onClick={handleCartQuantity}>Add to cart</Button>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default DetailProduct;
