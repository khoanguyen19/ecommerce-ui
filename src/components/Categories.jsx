import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 80px 0;

  ${mobile({
    margin: '30px 0',
    flexDirection: 'column'
  })}
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default Categories