import { Flex } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

function Index() {
  return (
    <Flex
      minH="100vh"
      bgImage="url(../../src/assets/background-site.png)"
      flexDir="column"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Header />
      <Hero />
    </Flex>
  );
}

export default Index;
