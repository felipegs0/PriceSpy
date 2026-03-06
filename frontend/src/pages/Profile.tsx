import { useEffect } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Heading,
  Text,
  Card,
  Image,
  Grid,
  Stat,
  HStack,
  Button,
} from "@chakra-ui/react";
import ProductCard from "@/components/ProductCard";
import { IoNotifications, IoAdd } from "react-icons/io5";

import iconBell from "../assets/icons/notificacao.png";
import iconGraph from "../assets/icons/grafico.png";

function Profile() {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      w={"100vw"}
      h={"100vh"}
      justifyContent={"center"}
      backgroundColor={"#F0F1F6"}
    >
      <Flex
        backgroundColor={"#F0F1F6"}
        w={"60%"}
        h="100vh"
        p={8}
        flexDir={"column"}
        gap={8}
      >
        <Box>
          <Heading color={"black"} size={"3xl"} mb={2}>
            Bem-vindo, Felipe!
          </Heading>
          <Text color={"#00000075"} fontSize={18}>
            Aqui estão seus produtos monitorados.
          </Text>
        </Box>
        <Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Stat.Root bg="gray.800" p="20px" borderRadius="xl">
              <Stat.Label>Alertas Ativos</Stat.Label>
              <Stat.ValueText>3</Stat.ValueText>
              <Stat.HelpText>Produtos monitorados</Stat.HelpText>
            </Stat.Root>

            <Stat.Root bg="gray.800" p="20px" borderRadius="xl">
              <Stat.Label>Total de Produtos</Stat.Label>
              <Stat.ValueText>12</Stat.ValueText>
              <Stat.HelpText>Monitorados</Stat.HelpText>
            </Stat.Root>
          </Grid>
        </Box>
        <Box>
          <Box>
            <HStack justifyContent={"space-between"}>
              <Heading color={"black"}>Seus Produtos Monitorados</Heading>
              <Button
                variant={"outline"}
                color={"black"}
                _hover={{ color: "whiteAlpha.900", backgroundColor: "#27272A" }}
                transition={"all, 0.3s"}
              >
                + Adicionar Produto
              </Button>
            </HStack>
          </Box>
          <Box mt={6} display="flex" flexDir="column" gap={4}>
              <ProductCard name="RTX 5080" price={2000} targetPrice={1000}/>
              <ProductCard name="RTX 5080" price={2000} targetPrice={1000}/>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Profile;
