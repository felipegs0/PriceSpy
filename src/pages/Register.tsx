import {
  Heading,
  Input,
  Button,
  VStack,
  Field,
  Fieldset,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";

import AuthLayout from "@/components/Auth/AuthLayout";

function Register() {
  return (
    <AuthLayout>
      <Fieldset.Root size="lg" w="100%">
        <VStack w="100%" gap={8}>
          <Heading size="3xl" color="white.700">
            Registrar no PriceSpy
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

            <Field.Root>
              <Field.Label fontSize="xl">Confirme sua senha</Field.Label>
              <Input
                type="password"
                bg="white"
                borderRadius="lg"
                name="confirmPassword"
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
            Registrar
          </Button>
        </VStack>
        <Text>
          Já possui conta?{" "}
          <Link
            as={RouterLink}
            to="/login"
            color="#76d8ff"
            fontWeight="medium"
            _hover={{ textDecoration: "underline" }}
          >
            Faça login
          </Link>
        </Text>
      </Fieldset.Root>
    </AuthLayout>
  );
}

export default Register;
