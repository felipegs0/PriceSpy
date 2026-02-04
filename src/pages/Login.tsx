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


import AuthLayout from "@/components/Auth/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <Fieldset.Root size="lg" w="100%" py={8} px={4}>
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
                  bg="255 255 255 0.1"
                  borderRadius="full"
                  name="email"
                  size="lg"
                  fontSize="md"
                  type="email"
                  color="white"
                  border="2px solid rgba(255, 255, 255, 0.3)"
                  backdropBlur="10px"
                  placeholder="Email"
                  outline="none"
                />
              </InputGroup>
            </Field.Root>
            <Field.Root>
              <InputGroup startElement={<IoLockClosedOutline size={22} />}>
                <Input
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
    </AuthLayout>
  );
}

export default Login;
