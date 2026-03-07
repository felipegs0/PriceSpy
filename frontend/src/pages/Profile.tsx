import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Stat,
  HStack,
  Button,
  Dialog,
  Portal,
  Field,
  Stack,
  Input,
  CloseButton,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

import ProductCard from "@/components/ProductCard";
import iconBell from "../assets/icons/notificacao.png";
import iconGraph from "../assets/icons/grafico.png";

function Profile() {
  const [productName, setProductName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [actualPrice, setActualPrice] = useState<number>(0);
  const [targetPrice, setTargetPrice] = useState<number>(0);

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

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/")
    }
    catch(err: any) {
      toaster.error({
        title: "Erro!",
        description: err.response?.data?.message || "Erro inesperado.",
        duration: 3000,
      });
    }
  };

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

              {/* ABERTURA DO MODAL */}
              <Dialog.Root placement={"center"}>
                <Dialog.Trigger asChild>
                  <Button
                    variant={"outline"}
                    color={"black"}
                    _hover={{
                      color: "whiteAlpha.900",
                      backgroundColor: "#27272A",
                    }}
                    transition={"all, 0.3s"}
                  >
                    + Adicionar Produto
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />

                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.CloseTrigger asChild>
                          <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                        <Dialog.Title>Novo produto</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body pb={4}>
                        <Stack gap={4}>
                          <Field.Root>
                            <Field.Label>Nome</Field.Label>
                            <Input
                              required
                              placeholder={"Nome do produto"}
                              onChange={(e) => setProductName(e.target.value)}
                            />
                          </Field.Root>
                          <Field.Root>
                            <Field.Label>URL</Field.Label>
                            <Input
                              required
                              placeholder={"URL do produto"}
                              onChange={(e) => setUrl(e.target.value)}
                            />
                          </Field.Root>
                          <Field.Root>
                            <Field.Label>Preço Atual (R$)</Field.Label>
                            <Input
                              required
                              type="number"
                              placeholder={"Preço Atual"}
                              onChange={(e) =>
                                setActualPrice(Number(e.target.value))
                              }
                            />
                          </Field.Root>
                          <Field.Root>
                            <Field.Label>Preço Alvo (R$)</Field.Label>
                            <Input
                              required
                              type="number"
                              placeholder={"Preço Alvo"}
                              onChange={(e) =>
                                setTargetPrice(Number(e.target.value))
                              }
                            />
                          </Field.Root>
                        </Stack>
                      </Dialog.Body>
                      <Dialog.Footer>
                        <Dialog.ActionTrigger asChild>
                          <Button variant="outline">Cancelar</Button>
                        </Dialog.ActionTrigger>
                        <Button>Salvar</Button>
                      </Dialog.Footer>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
              {/* ACABA O MODAL */}
            </HStack>
          </Box>
          <Box mt={6} display="flex" flexDir="column" gap={4}></Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Profile;
