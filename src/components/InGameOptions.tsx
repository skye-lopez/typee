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
    time: number
}

export default function InGameOptions({ setGameState, time } : InGameOptionsProps) {
    const bg = useColorModeValue("orange", "#886bf2");
    return (
        <Flex 
            bg={bg} 
            width="100vw"
            padding="5px 10px"
            justifyContent="space-between"
        >
            <Stack direction="row" spacing={2}>
                <Button 
                    colorScheme="red"
                    onClick={() => setGameState("select")}
                >
                    Exit Game
                </Button>
                <Button
                    colorScheme="orange"
                    onClick={() => {}}
                >
                    Restart Game
                </Button>
            </Stack>
            <Text>{time}</Text>
        </Flex>
    );
}
