import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/callApis";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
`;

const Products = ({ category, filters, sort }) => {
  // const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);

  // const filteredProduct = products.filter((p) =>
  //   p.categories.includes(category)
  // );

  useEffect(() => {
    setFilteredProducts(
      filters
        ? products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        : products
    );
  }, [filters, products]);
  return (
    <Container>
      {category
        ? filteredProducts
            .filter((p) => p.categories.includes(category))
            .map((item) => <Product item={item} key={item._id} />)
        : products // Render 8 products at Home page
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
