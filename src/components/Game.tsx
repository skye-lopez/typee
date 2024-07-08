import { useState, useEffect } from "react"
import {
    Flex,
    Box,
    Text,
    Input,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react"
import GameSelection from "./GameSelection";

export default function Game() {
    const gameBgColor = useColorModeValue("white", "black");
    const [gameState, setGameState] = useState("select");
    return (
        <Flex 
            justifyContent="center" 
            alignItems="center" 
            minHeight="700px" 
            bg={gameBgColor}
            marginBottom="25px"
        >
            <GameSelection setGameState={setGameState} />
        </Flex>
    );
}
