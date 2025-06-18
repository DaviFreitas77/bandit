import { Box, Flex, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <Box as="footer" bg="black" color="white" py={6} px={4} width='100%'>
      {/* Redes Sociais */}
      <Flex justify="center" mb={4} gap={6}>
        <Link href="https://www.instagram.com/y.w.bandit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" >
          <Icon as={FaInstagram} color="#FDC700" boxSize={6} _hover={{ color: "pink.400" }} />
        </Link>
        <Link href="https://wa.me/5511954783565" >
          <Icon as={FaWhatsapp} color="#FDC700" boxSize={6} _hover={{ color: "green.400" }} />
        </Link>
        <Link href="https://www.tiktok.com/@y.w.bstylish?_t=ZM-8xIHn5w4RXk&_r=1" >
          <Icon as={FaTiktok} color="#FDC700" boxSize={6} _hover={{ color: "gray.400" }} />
        </Link>
      </Flex>

      {/* Texto */}
      <Stack  textAlign="center">
        <Text fontSize="sm">© 2025 YWB Stylish. Todos os direitos reservados.</Text>
        <Text fontSize="xs" color="gray.400">Desenvolvido por hype.</Text>
      </Stack>
    </Box>
  );
}
