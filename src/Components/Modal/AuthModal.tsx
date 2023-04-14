import { authModalState } from "@/atoms/authModalAtom";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const router = useRouter();

  const [modalState, setModalState] = useRecoilState(authModalState);

  const initialRef = React.useRef(null);

  const handleOnClose = () => {
    setModalState({ open: false });
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Flex align={"center"} justify={"space-around"}>
              <Text fontSize={12} mr={1}>
                New Here?{" "}
              </Text>
              <Text
                mr={20}
                decoration={"underline"}
                cursor={"pointer"}
                onClick={() => {
                  handleOnClose();
                  router.push("/Files/Signup");
                }}
                color="brand.700"
                fontWeight={600}
                fontSize={14}
              >
                SignUp
              </Text>
              <Flex>
                <Button colorScheme="teal" mr={3}>
                  Save
                </Button>
                <Button onClick={handleOnClose}>Cancel</Button>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
