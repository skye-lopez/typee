import {
    Flex,
    Box,
    Text,
    Input,
    useColorModeValue,
    Stack,
    Button,
} from "@chakra-ui/react"

interface InGameOptionsProps {
    setGameState: Function
}

export default function InGameOptions({ setGameState } : InGameOptionsProps) {
    const bg = useColorModeValue("orange", "#886bf2");
    return (
        <Flex 
            bg={bg} 
            width="100vw"
            padding="5px 10px"
        >
            <Button 
                colorScheme="red"
                onClick={() => setGameState("select")}
            >
                Exit Game
            </Button>
        </Flex>
    );
}
