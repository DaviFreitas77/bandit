import {
    Button,
    CloseButton,
    Drawer,
    For,
    HStack,
    Portal,
} from "@chakra-ui/react"

import { EmptyState, Stack, VStack } from "@chakra-ui/react"
import { LuShoppingCart } from "react-icons/lu"


import { FaShoppingCart } from "react-icons/fa";

export default function ShoppingCart() {
    return (
        <HStack wrap="wrap">
            <For each={["end"]}>
                {(placement) => (
                    <Drawer.Root key={placement} placement={placement}>
                        <Drawer.Trigger asChild>


                            <FaShoppingCart color="black" size={24} className="cursor-pointer" />

                        </Drawer.Trigger>
                        <Portal>
                            <Drawer.Backdrop />
                            <Drawer.Positioner>
                                <Drawer.Content>
                                    <Drawer.Header>
                                        <Drawer.Title>Drawer Title</Drawer.Title>
                                    </Drawer.Header>

                                    <Stack >
                                        <For each={["md"]}>
                                            {(size) => (
                                                <EmptyState.Root size={size} key={size}>
                                                    <EmptyState.Content>
                                                        <EmptyState.Indicator>
                                                            <LuShoppingCart />
                                                        </EmptyState.Indicator>
                                                        <VStack textAlign="center">
                                                            <EmptyState.Title>Seu carrinho está vazio</EmptyState.Title>
                                                            <EmptyState.Description>
                                                                Explore nossos produtos e adicione itens ao seu carrinho
                                                            </EmptyState.Description>
                                                        </VStack>
                                                    </EmptyState.Content>
                                                </EmptyState.Root>
                                            )}
                                        </For>
                                    </Stack>
                                    <Drawer.CloseTrigger asChild>
                                        <CloseButton size="sm" />
                                    </Drawer.CloseTrigger>
                                </Drawer.Content>
                            </Drawer.Positioner>
                        </Portal>
                    </Drawer.Root>
                )}
            </For>
        </HStack>
    )
}
