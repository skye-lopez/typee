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
import InGameOptions from "./InGameOptions";

export default function Game() {
    const gameBgColor = useColorModeValue("white", "black");
    const [gameState, setGameState] = useState("endless");
    return (
        <Flex direction="column">
            <Flex>
                { gameState !== 'select' ? (<InGameOptions setGameState={setGameState}/>) : null }
            </Flex>
            <Flex 
                justifyContent="center" 
                alignItems="center" 
                minHeight="700px" 
                bg={gameBgColor}
            >
            {
                gameState === 'select' ? (<GameSelection setGameState={setGameState} />) :
                (<Flex>
                    <Text>We are in { gameState } </Text>
                </Flex>)
            }
            </Flex>
        </Flex>
    );
}
