import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  margin: 0 20px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 30px;

  ${mobile({
    marginTop: "32px",
    fontSize: "24px",
  })}
`;

const SearchContainer = styled.div`
  width: 200px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 10px;
  padding: 5px 8px 5px 10px;
  border: 0.5px solid lightGray;
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

const FilterContainer = styled.div`
  margin: 20px 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "10px 0px 20px",
  })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;

  ${mobile({ margin: "6px 0" })}
`;

const FilterText = styled.h3`
  font-size: 18px;
  font-weight: 400;

  ${mobile({
    fontSize: "14px",
    width: "96px",
  })}
`;

const Select = styled.select`
  margin: 0 10px;
  padding: 5px;
  border-color: #999;
  border-radius: 3px;

  ${mobile({ padding: "2px" })}
`;

const Option = styled.option``;

const ProductsPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [search, setSearch] = useState("");

  const handleFilters = (e) => {
    const value = e.target.value;
    if (value) {
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    } else {
      const newFilters = { ...filters };
      delete newFilters[e.target.name];
      setFilters({
        ...newFilters,
      });
    }
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <TopContainer>
          <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
          <SearchContainer>
            <Input onChange={(e) => setSearch(e.target.value)} />
            <SearchIcon sx={{ fontSize: 18, color: "gray" }} />
          </SearchContainer>
        </TopContainer>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option value="" defaultValue>
                All
              </Option>
              <Option value="white">White</Option>
              <Option value="black">Black</Option>
              <Option value="red">Red</Option>
              <Option value="white">Blue</Option>
              <Option value="yellow">Yellow</Option>
              <Option value="green">Green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option value="">All</Option>
              <Option value="s">S</Option>
              <Option value="m">M</Option>
              <Option value="l">L</Option>
              <Option value="xl">XL</Option>
              <Option value="other">Other</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="popular">Popular</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products
          category={category}
          filters={filters}
          sort={sort}
          search={search}
        />
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductsPage;
