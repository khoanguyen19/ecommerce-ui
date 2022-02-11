import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  background-color: #fcf5f5;
  padding: 50px;

  ${mobile({
    padding: '30px',
    flexDirection: 'column'
  })}
`

const Left = styled.div`
  flex: 1;
`

const Logo = styled.h1`
  font-size: 36px;
  font-weight: 500;
`

const Desc = styled.p`
  margin: 30px 0;
  padding-right: 60px;
  line-height: 1.4;

  ${mobile({ paddingRight: 0 })}
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #212529;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`

const Center = styled.div`
  flex: 1;

  ${mobile({ margin: '50px 0' })}
`

const Title = styled.h3`
  margin-bottom: 50px;

  ${mobile({ marginBottom: '24px' })}
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 16px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
`

const links = ['Home', 'Man Fashion', 'Accessories', 'Order Tracking', 'Wishlist', 'Cart', 'Woman Fashion', 'My Account', 'Terms']

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BEAN.</Logo>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit aut consequuntur maiores sint exercitationem molestiae, officia ipsam, cupiditate est iusto blanditiis distinctio assumenda. Illum.</Desc>
        <SocialContainer>
          <SocialIcon>
            <FacebookIcon style={{ fontSize: '20px'}}/>
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon style={{ fontSize: '20px'}}/>
          </SocialIcon>
          <SocialIcon>
            <TwitterIcon style={{ fontSize: '20px'}}/>
          </SocialIcon>
          <SocialIcon>
            <PinterestIcon style={{ fontSize: '20px'}}/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          {links.map(link => (
            <ListItem key={link}>{link}</ListItem>
          ))}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <LocationOnIcon style={{marginRight: '10px'}}/>
            Danang, VietNam 55000
        </ContactItem>
        <ContactItem>
            <PhoneIcon style={{marginRight: '10px'}}/>
            +1 324 2312
        </ContactItem>
        <ContactItem>
            <EmailIcon style={{marginRight: '10px'}}/>
            contact@khngyn.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
