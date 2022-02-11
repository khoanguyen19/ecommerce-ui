import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { mobile } from '../responsive'

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: all 1s ease-in;
`
const Image = styled.img`
  height: 80%;
  transition: all 0.5s linear;

  ${mobile({ height: '60%' })}
`

const Container = styled.div`
  width: 100%;
  flex: 1;
  min-width: 280px;
  height: 320px;
  background-color: #fcf5f5;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &:hover  {
    ${IconContainer} {
      opacity: 1;
    }

    ${Image} {
      height: 90%;
    }
  }

  ${mobile({
    minWidth: '130px',
    height: '180px'
  })}
`

const Icon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}/>
      <IconContainer>
        <Icon>
          <ShoppingCartOutlinedIcon style={{fontSize: '20px'}}/>
        </Icon>
        <Icon>
          <SearchOutlinedIcon style={{fontSize: '20px'}}/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon style={{fontSize: '20px'}}/>
        </Icon>
      </IconContainer>
    </Container>
  )
}

export default Product
