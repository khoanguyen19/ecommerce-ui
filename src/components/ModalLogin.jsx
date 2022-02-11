import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  border-radius: 5px;
  position: relative;

  ${mobile({ padding: '40px 30px' })}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`

const Link = styled.a`
  font-size: 14px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`

const Button = styled.button`
width: 100%;
padding: 10px 12px;
margin-top: 10px;
font-size: 14px;
border-radius: 3px;
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

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 30px;

  ${mobile({ right: '20px' })}
`

const ModalLogin = ({ closeModal }) => {

  return (
    <Container>
      <CloseButton onClick={closeModal}>
        <CloseIcon style={{fontSize: '32px'}}/>
      </CloseButton>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="Username"/>
        <Input placeholder="Password" type="password"/>
        <Link>Forgot your password?</Link>
        <Link>Create an account</Link>
        <Button>LOG IN</Button>
      </Form>
    </Container>
  )
}

export default ModalLogin
