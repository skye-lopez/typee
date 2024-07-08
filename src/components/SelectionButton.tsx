import { useState } from "react";
import {
    Flex,
    Button,
    Text,
    useColorModeValue,
    useColorMode,
} from "@chakra-ui/react";

interface SelectionButtonProps {
    btnText: string
    infoText: string
    update: Function
    reset: Function
}

export default function SelectionButton({ btnText, infoText, update, reset }: SelectionButtonProps) {
    const bg = useColorModeValue("whitesmoke", "#262626");
    const { colorMode } = useColorMode();
    return (
        <Flex 
            alignItems="center"
            bg={bg}
            padding="7px 10px"
            borderRadius="10px"
            cursor="pointer"
            _hover={{ bg: colorMode === 'dark' ? 'purple' : '#74f8fc' }}
            onClick={() => { update(btnText.toLowerCase()); reset(); } }
        >
            <Button 
                marginRight="10px" 
                colorScheme="purple"
            >
                { btnText }
            </Button>
            <Text>{ infoText }</Text>
        </Flex>
    );
}
