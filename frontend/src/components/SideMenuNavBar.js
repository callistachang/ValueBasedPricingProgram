import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Input,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function SideMenuNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const LinkButton = (props) => {
    const { children } = props;

    return (
      <Button isFullWidth>
        <Link to={{ pathname: props.to }}>{children}</Link>
      </Button>
    );
  };

  return (
    <Box bg="#31343A" w="100%" p={2} mb={2} color="white">
      <Button ref={btnRef} bg="brand.100" onClick={onOpen} size="xs" m={0}>
        Open
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Side Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={2}>
                <LinkButton to="/results">USP Results</LinkButton>
                <LinkButton to="/recommendations">
                  Price Recommendations
                </LinkButton>
                <LinkButton to="/sentiments">Sentiment Analysis</LinkButton>
                <LinkButton to="/qna">Vehicle Q&A</LinkButton>
                <LinkButton to="/">Landing Page</LinkButton>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}
