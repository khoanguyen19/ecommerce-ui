import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 70vh;
  margin: 0 10px;
  position: relative;

  ${mobile({ margin: '5px 0' })}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({ height: '30vh' })}
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  font-size: 28px;
  color: #fff;
  margin-bottom: 22px;
`

const Button = styled.button`
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 5px;
  background-color: #fff;
  border-color: #fafafa;
  color: #000;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    opacity: 1;
  }
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem