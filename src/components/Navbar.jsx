import { useState } from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Modal from "./Modal";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  padding: 4px;

  ${mobile({
    height: "20px",
    padding: "4px 14px",
  })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  ${mobile({ padding: "6px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.select`
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightGray;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px 8px 5px 10px;
  border-radius: 5px;

  ${mobile({
    marginLeft: "0px",
    padding: 0,
    border: "none",
  })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  margin-right: 2px;

  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const LogoLink = styled(Link)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #000000;
  text-decoration: none;

  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile({ flex: 8 })}
`;

const MenuItem = styled.div`
  font-weight: 400;
  cursor: pointer;
  margin-left: 35px;

  &:hover {
    color: gray;
  }

  ${mobile({
    fontSize: "12px",
    marginLeft: "12px",
  })}
`;

const AvatarWrapper = styled.div`
  min-width: 120px;
  display: flex;
  align-items: center;
  background-color: rgba(153, 153, 153, 0.3);
  padding-left: 20px;
  border-radius: 20px;
  justify-content: space-between;
  /* margin-left: 35px; */
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");

  const quantity = useSelector((state) => state.cart.cartQuantity);
  const user = useSelector((state) => state.user?.currentUser);
  // const user = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root"))?.user
  // )?.currentUser;

  console.log(user);

  const handleShowModal = (type) => {
    setShowModal(true);
    setTypeModal(type);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            <option value="en">EN</option>
            <option value="vn">VN</option>
          </Language>
          <SearchContainer>
            <Input />
            <SearchIcon sx={{ fontSize: 18, color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <LogoLink to="/">BEAN.</LogoLink>
        </Center>
        <Right>
          {user === null ? (
            <>
              <MenuItem onClick={() => handleShowModal("register")}>
                REGISTER
              </MenuItem>
              <MenuItem onClick={() => handleShowModal("login")}>
                LOG IN
              </MenuItem>
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                type={typeModal}
              />
            </>
          ) : (
            <AvatarWrapper>
              <span>{user.fullname || user.username}</span>
              <Avatar
                src={
                  user.img ||
                  "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"
                }
              />
            </AvatarWrapper>
          )}
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
