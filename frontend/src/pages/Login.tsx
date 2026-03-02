// É válido colocar uma logo ao lado do primeiro heading

import {
  Heading,
  Input,
  Button,
  VStack,
  Field,
  Fieldset,
  Text,
  Link,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuUser } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router";
import axios from "axios";

import { toaster } from "@/components/ui/toaster";

import AuthLayout from "@/components/Auth/AuthLayout";

function Login() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null)

  const isDisabled = user.trim().length < 3 || password.trim().length < 6;

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      setError(null)

      await axios.post("http://localhost:3000/auth/login", {
          user,
          password
      });
      setUser("")
      setPassword("")

      toaster.success({
        title: "Logado",
        description: "Conta logada com sucesso!",
        duration: 3000,
      });
    }
    catch(err: any) {
      setError(err.response?.data?.message || "Erro inesperado.");
            
            toaster.error({
              title: "Erro!",
              description: err.response?.data?.message || "Erro inesperado.",
              duration: 3000,
            });
          }
    }

  return (
    <AuthLayout>
      <form style={{width: "100%"}} onSubmit={handleSubmit}>
      <Fieldset.Root size="lg"  py={8} px={4}>
        <VStack w="100%" gap={5}>
          <Heading size="4xl" color="white.700">
            PriceSpy
          </Heading>
          <Heading size="2xl" mb={6}>
            Bem-vindo de volta!
          </Heading>

          <Fieldset.Content gap={5}>
            <Field.Root>
              <InputGroup startElement={<LuUser size={22} />}>
                <Input
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}

                  bg="255 255 255 0.1"
                  borderRadius="full"
                  name="user"
                  size="lg"
                  fontSize="md"
                  color="white"
                  border="2px solid rgba(255, 255, 255, 0.3)"
                  backdropBlur="10px"
                  placeholder="Nome de usuário"
                  outline="none"
                  required
                />
              </InputGroup>
            </Field.Root>
            <Field.Root>
              <InputGroup startElement={<IoLockClosedOutline size={22} />}>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  type="password"
                  bg="255 255 255 0.1"
                  borderRadius="full"
                  name="password"
                  size="lg"
                  fontSize="md"
                  color="white"
                  border="2px solid rgba(255, 255, 255, 0.3)"
                  placeholder="Senha"
                  outline="none"
                  required
                  minLength={6}
                />
              </InputGroup>
            </Field.Root>
          </Fieldset.Content>

          <Button
            type="submit"
            mt={2}
            w="100%"
            size="lg"
            bg="#4B5AF3"
            color="white"
            h={"45px"}
            borderRadius="full"
            _hover={{ bg: "#4b59f3cf" }}
            
            disabled={isDisabled}
          >
            Fazer login
          </Button>
          <Text>
            Não possui conta? {}
            <Link
              as={RouterLink}
              to="/register"
              color="#5dbce2"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              Cadastre-se
            </Link>
          </Text>
        </VStack>
      </Fieldset.Root>
      </form>
    </AuthLayout>
  );
}

export default Login;
