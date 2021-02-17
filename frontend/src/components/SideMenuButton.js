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
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function SideMenuButton() {
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
    <>
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
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Stack spacing={2}>
                <LinkButton to="/usp">USP Report</LinkButton>
                <LinkButton to="/recommendation">
                  Price Recommendation
                </LinkButton>
                <LinkButton to="/sentiment">Result Sentiments</LinkButton>
                <LinkButton to="/">Home Page</LinkButton>
              </Stack>
            </DrawerBody>

            {/* <DrawerFooter>
              <Button variant="outline" mr={1} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
