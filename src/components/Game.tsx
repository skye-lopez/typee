import { useState, useEffect } from "react"
import GameText from './GameText';
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
    const inputBorder = useColorModeValue("white", "black")
    const [gameText, setGameText] = useState("Type: Start new game")
    const [userText, setUserText] = useState("");
    const [userQueue, setuserQueue] = useState([]);
    const [wordCount, setWordCount] = useState(0);
    const [pos, setPos] = useState(0);
    const [textIsValid, setTextIsValid] = useState('null');

    function handleInput(e: any) {
        e.preventDefault();
        setUserText(() => e.target.value);
    }

    useEffect(() => {
        setPos(userText.length);
        const userTextWords = userText.split(' ');
        const gameTextWords = gameText.split(' ');
        // A user can continue solving
        if (userTextWords[wordCount] === gameTextWords[wordCount]) {
            setWordCount((w) => w+1);
        }
    }, [userText]);
    return (
        <Flex justifyContent="center" alignItems="center">
            <Box bg={gameBg} w="90%" h="700px" maxWidth="1200px" borderRadius="10px" padding="25px">
                <Flex flexDirection="row">
                    { gameText.split('').map((t, i) => <GameText num={i} char={t} pos={pos} userChar={userText[i]}/>)}
                </Flex>
                <Box marginTop="25px">
                    <Input placeholder="Type here when game starts" value={userText} onChange={handleInput} color={textColor} borderColor={inputBorder} _placeholder={{ color: textColor }} bg="green"/>
                </Box>
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
