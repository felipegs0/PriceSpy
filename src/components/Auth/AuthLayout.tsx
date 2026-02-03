import { Box, Flex } from "@chakra-ui/react";
import type { ReactNode } from "react";
import backgroundVideo from "../../assets/background-auth.mp4";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Flex
      minH="100vh"
      bgGradient="to-r"
      gradientFrom="#ABA49E"
      gradientTo="#DFDAD3"
      flexDir="column"
      justify="center"
      align="center"
      position="relative"
    >
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        muted
        loop
        autoPlay
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Box
        zIndex={1}
        display="flex"
        p={6}
        w="100%"
        maxW="520px"
        bg="gray.500"
        borderRadius="2xl"
        justifyContent="center"
        boxShadow="0px 3px 10px 0px rgba(0, 0, 0, 0.4)"
      >
        {children}
      </Box>
    </Flex>
  );
}

export default AuthLayout;
