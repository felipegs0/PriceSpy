import {
  Heading,
  Input,
  Button,
  VStack,
  Field,
  Fieldset,
  Text,
  Link
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router"

import AuthLayout from "@/components/Auth/AuthLayout";


function Login() {
  return (
    <AuthLayout>
      <Fieldset.Root size="lg" w="100%">
        <VStack w="100%" gap={8}>
          <Heading size="3xl" color="white.700">
            Entrar no PriceSpy
          </Heading>

          <Fieldset.Content gap={5}>
            <Field.Root>
              <Field.Label fontSize="xl">Email</Field.Label>
              <Input
                bg="white"
                borderRadius="lg"
                name="email"
                size="lg"
                fontSize="md"
                type="email"
                color="black"
              />
            </Field.Root>
            <Field.Root>
              <Field.Label fontSize="xl">Senha</Field.Label>
              <Input
                type="password"
                bg="white"
                borderRadius="lg"
                name="password"
                size="lg"
                fontSize="md"
                color="black"
              />
            </Field.Root>
          </Fieldset.Content>

          <Button
            type="submit"
            w="100%"
            size="lg"
            bg="white"
            color="black"
            borderRadius="full"
            _hover={{ bg: "black", color: "white" }}
          >
            Fazer login
          </Button>
        </VStack>
        <Text>
        Não possui conta? {" "}
        <Link as={RouterLink} to="/register" color="#76d8ff" fontWeight="medium" _hover={{ textDecoration: "underline" }}>
        Cadastre-se
        </Link>
      </Text>
      </Fieldset.Root>
      
    </AuthLayout>
  );
}

export default Login;
