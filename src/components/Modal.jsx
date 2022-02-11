import { useRef, useCallback, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import ModalRegister from './ModalRegister'
import ModalLogin from './ModalLogin'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const AnimatedModal = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  ${mobile({ width: '80%' })}
`

const Modal = ({ showModal, setShowModal, type }) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  })

  const closeModal = () => {
    setShowModal(false)
  }

  const handleCloseModal = e => {
    if(modalRef.current === e.target) {
      closeModal()
    }
  }

  const keyPress = useCallback(e => {
    if(e.key === 'Escape' && showModal) {
      setShowModal(false)
    }
  }, [showModal, setShowModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => {
      document.removeEventListener('keydown', keyPress)
    }
  }, [keyPress])

  return(
    <>
    {showModal ? (
      <Container ref={modalRef} onClick={handleCloseModal}>
        <AnimatedModal style={animation}>
          {type === 'login' ? <ModalLogin closeModal={closeModal}/> : <ModalRegister closeModal={closeModal}/>}
        </AnimatedModal>
      </Container>
    ): null}
    </>
  )
}

export default Modal
