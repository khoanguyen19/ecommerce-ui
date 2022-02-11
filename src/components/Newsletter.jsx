import styled from 'styled-components'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100%;
  height: 60vh;
  margin: 20px 0;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

const Title = styled.h1`
  font-size: 68px;
  color: #212529;

  ${mobile({ fontSize: '48px' })}
`

const Desc = styled.p`
  margin: 20px 0 40px;
  font-size: 20px;
  font-weight: 300;
  text-align: center;

  ${mobile({ fontSize: '16px' })}
`

const InputContainer = styled.div`
  width: 45%;
  text-align: center;
  border: 1px solid #ccc;
  display: flex;

  ${mobile({ width: '80%' })}
`

const Input = styled.input`
  flex: 10;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px 0 8px 10px;

  ${mobile({ flex: '8' })}
`

const Button = styled.button`
  flex: 1;
  background-color: #212529;
  color: #fff;
  border: none;
  cursor: pointer;

  &:active {
    background-color: #000;
  }
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorites brands</Desc>
      <InputContainer>
        <Input/>
        <Button>
          <SendOutlinedIcon/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
