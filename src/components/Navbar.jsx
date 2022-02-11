import { useState } from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Modal from './Modal'
import { mobile } from '../responsive'

const Container = styled.div`
  height: 60px;
  padding: 4px;

  ${mobile({ 
    height: '20px',
    padding: '4px 14px'
  })}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  ${mobile({ padding: '6px 0' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.select`
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;

  ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightGray;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px 8px 5px 10px;
  border-radius: 5px;

  ${mobile(
    {
      marginLeft: '0px',
      padding: 0,
      border: 'none'
    }
  )}
`

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  margin-right: 2px;

  ${mobile({ display: 'none' })}
`

const Center = styled.div`
  flex: 1;
`

const Logo = styled.h1`
  font-weight: 500;
  text-align: center;

  ${mobile({ fontSize: '24px' })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile({ flex: 8 })}
`

const MenuItem = styled.div`
  font-weight: 400;
  cursor: pointer;
  margin-left: 35px;

  &:hover {
    color: gray;
  }

  ${mobile({ 
    fontSize: '12px',
    marginLeft: '12px' 
  })}
`

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const [typeModal, setTypeModal] = useState('')

  const handleShowModal = (type) => {
    setShowModal(true)
    if(type){
      setTypeModal(type)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            <option value="en">EN</option>
            <option value="vn">VN</option>
          </Language>
          <SearchContainer>
            <Input/>
            <SearchIcon sx={{ fontSize: 18, color: 'gray' }}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BEAN.</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => handleShowModal('register')}>REGISTER</MenuItem>
          <MenuItem onClick={() => handleShowModal('login')}>LOG IN</MenuItem>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            type={typeModal}
          />
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar