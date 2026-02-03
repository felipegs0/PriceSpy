import { Flex, Box, Button, ButtonGroup, Image } from "@chakra-ui/react";
import logo from "../../assets/PriceSpy-logo.png";

function Header() {
  return (
    <>
      <Flex h="120px" width="100vw" align="center" justify="space-between" p={8}>
        <Box>
          <Image src={logo} alt="pricespy-logo" width="180px" />
        </Box>
        <Box>
          <ButtonGroup size="xl" gap={4}>
            <Button colorScheme="teal" rounded="full" px={7} _hover={{background: "#f5f5f5"}}>Log in</Button>
            <Button colorScheme="teal" rounded="full" px={7} _hover={{background: "#f5f5f5"}}>Register</Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </>
  );
}

export default Header;
