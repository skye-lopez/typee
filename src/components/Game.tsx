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
    const [gameState, setGameState] = useState("select");

    function getNewPrompt() {
        console.log('hi');
        let n = data[Math.floor(Math.random() * data.length)];
        console.log(n);
        return n
    }

    function handleInput(e: any) {
        setUserWord(() => e.target.value);
    }

    function resetGame() {
        setUserWord("");
        setCursorIdx(0);
        setWordIdx(0);
        setUserIdx(0);
        setGamePrompt(() => {
            const newPrompt = getNewPrompt()
            return newPrompt;
        });
    }

    const [gamePrompt, setGamePrompt] = useState(getNewPrompt())
    const [words, setWords] = useState<string[]>([]);
    const [wordIdx, setWordIdx] = useState(0);
    const [userWord, setUserWord] = useState("");
    const [userIdx, setUserIdx] = useState(0);
    const [cursorIdx, setCursorIdx] = useState(1);

    useEffect(() => {
        if (gameState !== "select") {
            // A new game is starting.
            // TODO: Timer before game start (2s)
        }
    }, [gameState]);

    useEffect(() => {
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
    }, [gamePrompt]);

    useEffect(() => {
        setUserIdx(userWord.length-1);
        setCursorIdx(userWord.length);
        if (userWord === words[wordIdx]) {
            setUserWord("");
            setWordIdx((o) => o + 1);
        }
    }, [userWord]);

    useEffect(() => {
        if (gameState === 'prompt' && wordIdx > words.length-1) {
            setGameState("victory");
            resetGame();
        } else if ((gameState === 'survival' || gameState === 'endless') && wordIdx > words.length-1) {
            resetGame();
        }
    }, [wordIdx]);

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
                gameState === 'select' ? (<GameSelection setGameState={setGameState} reset={resetGame} />) :
                gameState === 'victory' ? (<Text>You won</Text>) : 
                (<Flex flexDirection="column" maxWidth="75%">
                    <Flex flexDirection="row" flexWrap="wrap">
                        { words?.map((w, idx) => (<Word word={w} idx={idx} selected={wordIdx === idx} wordIdx={wordIdx} userWord={userWord} userIdx={userIdx} cursorIdx={cursorIdx} />))}
                    </Flex>
                    <Flex marginTop="20px">
                        <Input placeholder="..." border="1px" value={userWord} onChange={handleInput}/>
                    </Flex>
                </Flex>)
            }
            </Flex>
        </Flex>
    );
}
