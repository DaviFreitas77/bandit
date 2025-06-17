
import { Portal, Select, createListCollection, HStack, IconButton, NumberInput, Button, Group, Input } from "@chakra-ui/react"
import { LuMinus, LuPlus } from "react-icons/lu"
import { CiDeliveryTruck } from "react-icons/ci";
import { useState } from "react"
import { Header } from '../componentes/header';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export default function InfoProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const { item } = location.state || {}
  const [value, setValue] = useState<string[]>([])

  const sizes = createListCollection({
    items: [
      { label: "p", value: "1" },
      { label: "m", value: "2" },
      { label: "g", value: "3" },
      { label: "gg", value: "4" },
    ],
  })

  console.log(item)
  return (

    <div>
      <Header />
      <div className="flex justify-center w-full flex-col lg:flex-row flex-wrap" >
        <div className='lg:w-[50%] flex justify-center'style={{marginTop:70}}>
          <img className='lg:w-[80%]' src={item.image} alt="" />
        </div>
        <div
          className="w-full lg:w-[50%] flex  items-start lg:items-center justify-center"
          style={{ marginTop: 20, paddingLeft: 16, paddingRight: 16 }}
        >
          <div className='w-full lg:w-[50%]' >
            <h1 style={{ fontWeight: '600', fontSize: 28 }}>{item.name}</h1>
            <p style={{ fontWeight: 'bold', fontSize: 28, marginTop: 15 }}>{item.price}</p>
            <p style={{ fontSize: 14, color: '#579295', fontWeight: "bold" }}>{item.description}</p>

            {item.category != 'Copo' ? (
              <Select.Root
                collection={sizes
                }

                pt="8"
                value={value}
                onValueChange={(e) => setValue(e.value)}
              >
                <Select.HiddenSelect />
                <Select.Label>Tamanho</Select.Label>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="selecione o tamanho" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {sizes
                        .items.map((size) => (
                          <Select.Item item={size} key={size.value}>
                            {size.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            ) : (
              null
            )}

            <div className='flex items-center gap-4 w-full' style={{ marginTop: 40, paddingRight: 16 }}>
              {/* <NumberInput.Root defaultValue="1" min={1} unstyled spinOnPress={false}>
                <HStack gap="2">
                  <NumberInput.DecrementTrigger asChild>
                    <IconButton variant="outline" size="sm">
                      <LuMinus />
                    </IconButton>
                  </NumberInput.DecrementTrigger>
                  <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
                  <NumberInput.IncrementTrigger asChild>
                    <IconButton variant="outline" size="sm">
                      <LuPlus />
                    </IconButton>
                  </NumberInput.IncrementTrigger>
                </HStack>
              </NumberInput.Root> */}
              <Button
                onClick={() => {
                  window.open(
                    `https://wa.me/5511954783565?text=Olá! Tenho interesse no produto: ${encodeURIComponent(item.name)}`,
                    '_blank'
                  );
                }}
                bg="black"
                color="white"
                _hover={{ bg: "gray.800" }}
                width="100%"
                maxW={{ base: "140px", sm: "200px", md: "250px" }}
                size={{ base: "sm", sm: "md" }}
              >

                Comprar
              </Button>
            </div>
            {/* <div className='flex flex-col gap-2' style={{ marginTop: 20 }}>
              <div className='flex items-center gap-2'>
                <CiDeliveryTruck size={25} />
                <span>meios de envio</span>
              </div>
              <Group attached w="full" maxW="sm">
                <Input flex="1" placeholder="cep" />
                <Button bg="bg.subtle" variant="outline">
                  Calcular
                </Button>
              </Group>
            </div> */}
          </div>
        </div>
      </div>
    </div>

  );
}
