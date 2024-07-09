import {
    Flex,
    Box,
    Text,
    Input,
    useColorModeValue,
    Stack,
    Button,
} from "@chakra-ui/react"
import { useState, useEffect} from "react";

interface InGameOptionsProps {
    setGameState: Function
    resetGame: Function
    time: number
}

export default function InGameOptions({ setGameState, time, resetGame } : InGameOptionsProps) {
    const bg = useColorModeValue("orange", "#886bf2");
    const [readableTime, setReadableTime] = useState("");

    useEffect(() => {
        const mins = Math.floor(time / 60);
        const seconds = time % 60;
        setReadableTime(`${mins}m ${seconds}s`);
    }, [time])
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
                    onClick={() => { setGameState("select"); resetGame(); } }
                >
                    Exit Game
                </Button>
            </Stack>
            <Text fontSize="2xl">{readableTime}</Text>
        </Flex>
    );
}
