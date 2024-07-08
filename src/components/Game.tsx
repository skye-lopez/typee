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
import Word from './Word';
import { data } from '../data.js'; 

export default function Game() {
    const gameBgColor = useColorModeValue("white", "black");
    const [gameState, setGameState] = useState("endless");

    function getNewPrompt() {
        return data[Math.floor(Math.random() * data.length)];
    }

    const [gamePrompt, setGamePrompt] = useState(getNewPrompt())
    const [words, setWords] = useState<string[]>([]);
    const [wordIdx, setWordIdx] = useState(2);

    useEffect(() => {
        if (gameState !== "select") {
            // A new game is starting.
            // TODO: Timer before game start (2s)

            // Transform prompt into words with proper spacing items.
            const words = [];
            for (let i = 0; i < gamePrompt.length; i++) {
                let wrd = "";
                while (gamePrompt[i] !== " " && i < gamePrompt.length) {
                    wrd += gamePrompt[i];
                    i++;
                }
                words.push(wrd);
                words.push(" ");
            }
            // Remove last empty space.
            words.pop();
            setWords(words);
        }
    }, [gameState]);

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
                (<Flex flexDirection="column" maxWidth="75%">
                    <Flex flexDirection="row" flexWrap="wrap">
                        { words?.map((w, idx) => (<Word word={w} idx={idx} selected={wordIdx === idx}/>))}
                    </Flex>
                    <Flex marginTop="20px">
                        <Input placeholder="..." border="1px"/>
                    </Flex>
                </Flex>)
            }
            </Flex>
        </Flex>
    );
}
