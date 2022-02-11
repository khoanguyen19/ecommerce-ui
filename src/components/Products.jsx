import { popularProducts } from '../data'
import styled from 'styled-components'
import Product from './Product'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
