import {
    Flex,
    Box,
    Text,
    Input,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react"

export default function InGameOptions() {
    const bg = useColorModeValue("orange", "#886bf2");
    return (
        <Flex 
            bg={bg} 
            width="100vw"
            padding="3px 10px"
        >
            <Text>In Game Options</Text>
        </Flex>
    );
}
