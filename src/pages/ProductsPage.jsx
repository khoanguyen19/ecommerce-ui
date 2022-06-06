import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  margin: 0 20px;
`;

const Title = styled.h2`
  margin-top: 20px;
  font-size: 30px;

  ${mobile({
    marginTop: "32px",
    fontSize: "24px",
  })}
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
  console.log(category);

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

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
        <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
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
        <Products category={category} filters={filters} sort={sort} />
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductsPage;
