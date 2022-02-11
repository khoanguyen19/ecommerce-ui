import styled from 'styled-components'


const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Announcement = () => {
  return (
    <Container>
      Super deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement
