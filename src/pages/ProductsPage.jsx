import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`
  margin: 0 20px;
`

const Title = styled.h2`
  margin-top: 20px;
  font-size: 30px;

  ${mobile({
    marginTop: '32px',
    fontSize: '24px'
  })}
`

const FilterContainer = styled.div`
  margin: 20px 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '10px 0px 20px' 
  })}
`

const Filter = styled.div`
  display: flex;
  align-items: center;

  ${mobile({ margin: '6px 0' })}
`

const FilterText = styled.h3`
  font-size: 18px;
  font-weight: 400;

  ${mobile({
    fontSize: '14px',
    width: '96px'
  })}
`

const Select = styled.select`
  margin: 0 10px;
  padding: 5px;
  border-color: #999;
  border-radius: 3px;

  ${mobile({ padding: '2px' })}
`

const Option = styled.option``

const ProductsPage = () => {
  return (
    <>
      <Announcement/>
      <Navbar/>
      <Container>  
        <Title>T-Shirt</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled>Size</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>Other</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option>Newest</Option>
              <Option>Popular</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products/>
      </Container>
      <Newsletter/>
      <Footer/>  
    </>
  )
}

export default ProductsPage
