import {
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure, Center
  } from "@chakra-ui/react"
import Button from 'react-bootstrap/Button';
import sampleImage from '../assets/reviewModal/sampleImage1.png';

function ReviewModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button style={{
            position: "absolute",
            left: "121.35px",
            top: "14.28px"
          }} onClick={onOpen}>Reviews</Button>
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          size="full"
          scrollBehavior={"inside"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Reviews</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Center>
                <Image src={sampleImage} alt="Sample Reviews" />   
              </Center>
            </ModalBody>
            <ModalFooter pt={10}>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ReviewModal;