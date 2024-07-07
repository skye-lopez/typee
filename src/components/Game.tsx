import { useState, useEffect } from "react"
import {
    Flex,
    Box,
    Text,
    Input,
    useColorModeValue,
} from "@chakra-ui/react"

export default function Game() {
    const gameBg = useColorModeValue("black", "white");
    const textColor = useColorModeValue("white", "black");
    const [gameText, setGameText] = useState("Type: Start new game")
    const [userText, setUserText] = useState("");
    const [userQueue, setuserQueue] = useState([]);

    function handleInput(e: any) {
        e.preventDefault();
        setUserText(() => e.target.value);
    }

    useEffect(() => {
        const userTextWords = userText.split(' ');
        const gameTextWords = gameText.split(' ');
        console.log(userTextWords);
        console.log(gameTextWords);

        if (userTextWords[0] === gameTextWords[0]) {
            userTextWords.shift();
            gameTextWords.shift();
            setGameText(() => gameTextWords.join(' '));
            setUserText(() => userTextWords.join(' '));
        }
    }, [userText]);
    return (
        <Flex justifyContent="center" alignItems="center">
            <Box bg={gameBg} w="90%" h="700px" maxWidth="1200px" borderRadius="10px" padding="25px">
            <Text fontSize='3xl' color={textColor}>{ gameText }</Text>
            <Input placeholder="Type here" value={userText} onChange={handleInput}/>
            </Box>
        </Flex> 
    );
}

/*
 * What I need to do:
 * - Method to get random text (from somewhere)
 * - Display this text in a cool way
 * - Capture user input (during the "race" only)
 * - Time Mode, Completion Mode, etc
 * - Match user input to display text
 *   -- all the fun functionality here
 *
 * - Cursor to show pos
 * - maybe a completion bar? (Also running timer for other ones)
 * - live wpm
 * - calculate wpm
 *
 *   End game design:
 *   Select a game mode (prompt,time,survival,endless)
 *   modes: static, destroy, appear
 *   (text always shows, text is destroyed on word completion, words appear 1 at a time.)
 *   Once game starts timer countdown and key strokes are only recorded
 */
