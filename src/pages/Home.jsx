import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Container>
        <Text>Featured Categories</Text>
        <Categories />
        <Text>Best-seller!</Text>
        <Products home={true} category={""} />
        <Newsletter />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
