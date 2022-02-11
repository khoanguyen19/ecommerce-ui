import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 50px 90px 50px 50px;

  ${mobile({
    flexDirection: 'column',
    padding: '0 10px',
    alignItems: 'center',
    marginTop: '30px'
  })}
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;

  ${mobile({
    justifyContent: 'center',
    marginBottom: '20px'
  })}
`

const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;

  ${mobile({
    width: '100%',
    height: '50vh'
  })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 30px;

  ${mobile({ padding: '0 10px' })}
`

const Title = styled.h3`
  font-size: 32px;
  font-weight: 400;

  ${mobile({ fontSize: '24px' })}
`

const Desc = styled.p`
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.5;

  ${mobile({ fontSize: '12px' })}
`

const Price = styled.p`
  font-size: 20px;
  margin: 40px 0;

  ${mobile({ margin: '32px 0' })}
`

const FilterContainer = styled.div`
  margin: 20px 0 30px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.h5`
  font-size: 16px;
  font-weight: 400;
  margin-right: 10px;
  width: 50px;

  ${mobile({
    fontSize: '14px',
    width: '40px'
  })}
`

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border-radius: 5px;
  border: 1px solid #333;
  margin-right: 10px;
  cursor: pointer;

  ${mobile({
    width: '20px',
    height: '20px'
  })}
`

const FilterSize = styled.select`
  padding: 5px;

  ${mobile({ padding: '2px' })}
`

const FilterSizeOption = styled.option``

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

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
    width: '20px',
    height: '20px',
    fontSize: '12px',
    margin: '0 5px'
  })}
`

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
`

const DetailProduct = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <ImageContainer>
          <Image src='https://cdn.mootssy.com/wp-content/uploads/2021/11/3302e17ad7f71fa946e6.jpg'/>
        </ImageContainer>
        <InfoContainer>
          <Title>Asian Dragon Tee</Title>
          <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, officiis deserunt est consequatur vero quam id, voluptate atque ducimus nam accusamus reiciendis nostrum. Ea quisquam tempore excepturi omnis qui reprehenderit incidunt porro obcaecati odit vitae. Optio minus dicta quasi maiores.</Desc>
          <Price>350.000đ</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Colors: </FilterTitle>
              <FilterColor color="black"/>
              <FilterColor color="white"/>
              <FilterColor color="gray"/>
            </Filter>
            <Filter>
              <FilterTitle>Amount: </FilterTitle>
              <AmountContainer>
                <RemoveIcon style={{cursor: 'pointer'}}/>
                <Amount>0</Amount>
                <AddIcon style={{cursor: 'pointer'}}/>
              </AmountContainer>
            </Filter>
          </FilterContainer>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size: </FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <Button>Add to cart</Button>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default DetailProduct
