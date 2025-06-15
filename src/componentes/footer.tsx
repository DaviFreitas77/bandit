import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      py={4}
      textAlign="center"
    
      bottom="0"
      width="100%"
      zIndex="1000"
    >
      <Text fontSize="sm">© 2025 YWB SYLISH. Todos os direitos reservados.</Text>
    </Box>
  );
}
