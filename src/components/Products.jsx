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

const Products = ({ category, filters, home, search, sort }) => {
  const [currentProducts, setCurrentProducts] = useState([]);
  // let deepProducts

  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);
  console.log(products);

  useEffect(() => {
    setCurrentProducts(products);

    filters &&
      setCurrentProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );

    search &&
      setCurrentProducts(
        products.filter((item) => item.title.toLowerCase().includes(search))
      );
  }, [filters, products, search, sort]);

  useEffect(() => {
    switch (sort) {
      case "popular":
        setCurrentProducts((currentProducts) =>
          [...currentProducts].sort((a, b) => a.sales - b.sales)
        );
        break;
      case "asc":
        setCurrentProducts((currentProducts) =>
          [...currentProducts].sort((a, b) => a.price - b.price)
        );
        break;
      case "desc":
        setCurrentProducts((currentProducts) =>
          [...currentProducts].sort((a, b) => b.price - a.price)
        );
        break;
      default:
        setCurrentProducts((currentProducts) =>
          [...currentProducts].sort((a, b) => a.updatedAt - b.updatedAt)
        );
        break;
    }
  }, [sort]);

  console.log(filters);

  return (
    <Container>
      {category !== "all"
        ? currentProducts
            .filter(
              (p) =>
                p.categories.includes(category) ||
                p.categories.includes("unisex")
            )
            .map((item) => <Product item={item} key={item._id} />)
        : currentProducts // Render 8 products at Home page
            .map((item) => <Product item={item} key={item._id} />)}
      {home &&
        [...currentProducts]
          .sort((a, b) => a.sales - b.sales)
          .slice(0, 8)
          .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
