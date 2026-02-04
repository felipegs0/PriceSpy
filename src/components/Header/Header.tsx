import { Flex, Box, Button, ButtonGroup, Image, Link } from "@chakra-ui/react";
import logo from "../../assets/PriceSpy-logo.png";
import { Link as RouterLink } from "react-router";

function Header() {
  return (
    <>
      <Flex
        h="120px"
        width="100vw"
        align="center"
        justify="space-between"
        p={8}
      >
        <Box>
          <Image src={logo} alt="pricespy-logo" width="180px" />
        </Box>
        <Box>
          <ButtonGroup size="xl" gap={4}>
            <Button
              colorScheme="teal"
              rounded="full"
              px={7}
              _hover={{ background: "#f5f5f5" }}
            >
              <Link as={RouterLink} to="/login" color="black" textDecoration="none">
              Login
              </Link>
            </Button>
            <Button
              colorScheme="teal"
              rounded="full"
              px={7}
              _hover={{ background: "#f5f5f5" }}
            >
              <Link as={RouterLink} to="/register" color="black" textDecoration="none">
              Register
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </>
  );
}

export default Header;
