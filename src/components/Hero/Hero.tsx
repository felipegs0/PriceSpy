import {
  Flex,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";

import { Link as RouterLink } from 'react-router'

import notebook from "../../assets/notebook.png";

function Hero() {
  return (
    <>
      <Flex w="100vw" minH="75vh" align="center" justify="center" gap={8}>
        <Box display="flex" flexDir="column" gap={8}>
          <Box display="flex" maxW="600px" gap={5} flexDir="column">
            <Heading color="#3F2A23" fontSize="48px" lineHeight={1.2}>
              Monitore o preço dos produtos que você deseja!
            </Heading>
            <Text fontSize="18px" color="#69534C" lineHeight={1.6}>
              Receba alertas instantâneos quando os preços caírem e encontre as
              melhores ofertas online com o PriceSpy, sua ferramenta de
              comparação de preços mais confiável.
            </Text>
          </Box>
          <ButtonGroup size="xl">
            <Button
              background="#3F2A23"
              color="#FFF"
              rounded="full"
              px={7}
              _hover={{
                background: "#241713",
              }}
            >
              <Link as={RouterLink} to="/register" color="white" textDecoration="none">
              Comece agora
              </Link>
            </Button>
            <Button colorScheme="teal" rounded="full" px={7} _hover={{background: "#f5f5f5"}}>
              <Link as={RouterLink} to="/login" color="black" textDecoration="none">
              Faça Login
              </Link>
            </Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Image src={notebook} alt="pricespy-logo" width="800px" />
        </Box>
      </Flex>
    </>
  );
}

export default Hero;
