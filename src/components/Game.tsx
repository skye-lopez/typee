import { useState, useEffect } from "react"
import SelectionButton from './SelectionButton';
import {
    Flex,
    Box,
    Text,
    Input,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react"

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
            <Flex flexDirection="column" alignItems="center">
                    <Text as="b" fontSize="20px" marginBottom="10px">Select a game mode</Text>
                <Stack direction='column' spacing={4}>
                    <SelectionButton 
                        btnText={"Endless"} 
                        infoText={"Type practice for as long as you want."} 
                    />
                    <SelectionButton 
                        btnText={"Prompt"} 
                        infoText={"See how quickly you can type a short prompt."} 
                    />
                    <SelectionButton 
                        btnText={"Survival"} 
                        infoText={"How long can you type without making a mistake?"} 
                    />
                </Stack>
            </Flex>
        </Flex>
    );
}
