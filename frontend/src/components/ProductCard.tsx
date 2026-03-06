import { Box, Card, Text, Image, Button } from "@chakra-ui/react";

function ProductCard({
  name,
  price,
  targetPrice,
}: {
  name: string;
  price: number;
  targetPrice: number;
}) {

    function formatCurrency(value: number) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value)
    }
  return (
    <Card.Root
      flexDirection={"row"}
      backgroundColor={"white"}
      p={5}
      border={"none"}
      boxShadow={"0 2px 4px 2px rgba(0,0,0, 0.2)"}
      gap={5}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box display="flex" gap={10}>
        <Image
          src="https://m.media-amazon.com/images/I/71edk5q7MPL._AC_SX679_.jpg"
          maxH={32}
        />
        <Box>
          <Card.Title color={"black"} pt={4} fontSize={23}>
            {name}
          </Card.Title>
        </Box>
      </Box>

      <Box display={"flex"} gap={10}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDir={"column"}
          gap={2}
        >
          <Text color={"blackAlpha.700"} fontSize={18}>
            Preço Atual:{" "}
            <Text as={"span"} fontWeight={"bold"} color={"blackAlpha.800"}>
                {formatCurrency(price)}
            </Text>
          </Text>
          <Text color={"blackAlpha.700"} fontSize={18}>
            Preço Alvo:{" "}
            <Text as={"span"} fontWeight={"bold"} color={"blackAlpha.800"}>
                {formatCurrency(targetPrice)}
            </Text>
          </Text>
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Button colorPalette={"blue"} size={"xl"}>
            Editar
          </Button>
          <Button colorPalette={"red"} size={"xl"}>
            Remover
          </Button>
        </Box>
      </Box>
    </Card.Root>
  );
}

export default ProductCard;
