import {
    Flex,
    Button,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

interface SelectionButtonProps {
    btnText: string
    infoText: string
}

export default function SelectionButton({ btnText, infoText }: SelectionButtonProps) {
    const bg = useColorModeValue("whitesmoke", "#262626");
    return (
        <Flex 
            alignItems="center"
            bg={bg}
            padding="7px 10px"
            borderRadius="10px"
            cursor="pointer"
        >
            <Button marginRight="10px" colorScheme="purple">{ btnText }</Button>
            <Text>{ infoText }</Text>
        </Flex>
    );
}
