import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
  margin: 10px 20px 80px 20px;

  ${mobile({ margin: '40px 20px' })}
`

const Title = styled.h2`
  font-weight: 500;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

const TopButton = styled.button`
  font-size: 14px;
  padding: 10px;
  background-color: #212529;
  border-color: #212529;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;

  ${mobile({ display: 'none' })}
`

const TopTexts = styled.div`
  ${mobile({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  })}
`

const TopText = styled.span`
  margin-right: 14px;
  text-decoration: underline;
  cursor: pointer;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  ${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
  flex: 3;

  ${mobile({ marginBottom: '40px' })}
`

const Product = styled.div`
  display: flex;
  margin: 20px 0;
`

const ImageDetail = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;

  ${mobile({
    width: '124px',
    height: '124px',
    marginRight: '16px'
  })}
`

const ProductDetail = styled.div`
  flex: 4;
  display: flex;

  ${mobile({ flexDirection: 'column' })}
`

const Details = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Detail = styled.span`
  margin-bottom: 10px;
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  ${mobile({ alignItems: 'flex-start' })}
`

const ProductAmount = styled.div`
  display: flex;
  align-items: center;

  ${mobile({ marginBottom: '10px' })}
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
    margin: '0 5px',
    height: '20px'
  })}
`

const ProductPrice = styled.div`
`

const Label = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  width: 80px;

  ${mobile({ fontSize: '16px' })}
`

const Price = styled.span`
  font-size: 24px;
  font-weight: 600;

  ${mobile({ fontSize: '20px' })}
`

const Hr = styled.hr`
  background-color: #999;
  height: 1px;
  border: none;
`

const Summary = styled.div`
  flex: 1;
  border: 1px solid #999;
  height: 380px;
  padding: 10px 20px;
`

const SummaryTitle = styled.h2`
  font-weight: 500;
`

const SummaryItem = styled.div`
  margin: ${props => props.type === 'total' ? '40px 0' : '30px 0'};
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && 500};
  font-size: ${props => props.type === 'total' && '20px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
  width: 100%;
  font-size: 14px;
  padding: 10px;
  background-color: #212529;
  border-color: #212529;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <Title>CART</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ImageDetail>
                <Image src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/447765/item/vngoods_35_447765.jpg?width=1008&impolicy=quality_75"/>
              </ImageDetail>
              <ProductDetail>
                <Details>
                  <Detail>
                    <Label>Product:</Label>
                    "WMNS" BEUTER SUNBURN BLACK T-SHIRT
                  </Detail>
                  <Detail>
                    <Label>ID:</Label>
                    9743501435
                  </Detail>
                  <Detail>
                    <Label>Color:</Label>
                    Black
                  </Detail>
                  <Detail>
                    <Label>Size:</Label>
                    L
                  </Detail>
                </Details>
                <PriceDetail>
                  <ProductAmount>
                    <Label>Amount:</Label>
                    <RemoveIcon style={{cursor: 'pointer'}}/>
                    <Amount>1</Amount>
                    <AddIcon style={{cursor: 'pointer'}}/>
                  </ProductAmount>
                  <ProductPrice>
                    <Label>Total: </Label>
                    <Price>350.000đ</Price>
                  </ProductPrice>
                </PriceDetail>
              </ProductDetail>
            </Product>
            <Hr/>
            <Product>
              <ImageDetail>
                <Image src="https://mootssy.com/wp-content/themes/mycustomtheme/images/tshirt.jpeg"/>
              </ImageDetail>
              <ProductDetail>
                <Details>
                  <Detail>
                    <Label>Product:</Label>
                    "WMNS" BEUTER SUNBURN BLACK T-SHIRT
                  </Detail>
                  <Detail>
                    <Label>ID:</Label>
                    9743501435
                  </Detail>
                  <Detail>
                    <Label>Color:</Label>
                    Black
                  </Detail>
                  <Detail>
                    <Label>Size:</Label>
                    L
                  </Detail>
                </Details>
                <PriceDetail>
                  <ProductAmount>
                    <Label>Amount:</Label>
                    <RemoveIcon style={{cursor: 'pointer'}}/>
                    <Amount>1</Amount>
                    <AddIcon style={{cursor: 'pointer'}}/>
                  </ProductAmount>
                  <ProductPrice>
                    <Label>Total: </Label>
                    <Price>350.000đ</Price>
                  </ProductPrice>
                </PriceDetail>
              </ProductDetail>
            </Product>
            <Hr/>
            <Product>
              <ImageDetail>
                <Image src="https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/447766/item/vngoods_34_447766.jpg?width=1008&impolicy=quality_75"/>
              </ImageDetail>
              <ProductDetail>
                <Details>
                  <Detail>
                    <Label>Product:</Label>
                    "WMNS" BEUTER SUNBURN BLACK T-SHIRT
                  </Detail>
                  <Detail>
                    <Label>ID:</Label>
                    9743501435
                  </Detail>
                  <Detail>
                    <Label>Color:</Label>
                    Black
                  </Detail>
                  <Detail>
                    <Label>Size:</Label>
                    L
                  </Detail>
                </Details>
                <PriceDetail>
                  <ProductAmount>
                    <Label>Amount:</Label>
                    <RemoveIcon style={{cursor: 'pointer'}}/>
                    <Amount>1</Amount>
                    <AddIcon style={{cursor: 'pointer'}}/>
                  </ProductAmount>
                  <ProductPrice>
                    <Label>Total: </Label>
                    <Price>350.000đ</Price>
                  </ProductPrice>
                </PriceDetail>
              </ProductDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>700.000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice>20.000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount: </SummaryItemText>
              <SummaryItemPrice>-15.000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>755.000đ</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Cart
