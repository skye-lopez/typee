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
import GameCompletion from "./GameCompletion";
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

    function resetStats() {
        setRunningWordCount(0);
        setRunningCharCount(0);
        setMistakes(0);
        setWpm(0);
        setTime(0);
    }

    const [gamePrompt, setGamePrompt] = useState("");
    const [words, setWords] = useState<string[]>([]);
    const [wordIdx, setWordIdx] = useState(0);
    const [userWord, setUserWord] = useState("");
    const [userIdx, setUserIdx] = useState(0);
    const [cursorIdx, setCursorIdx] = useState(1);
    
    // Stats
    const [runningWordCount, setRunningWordCount] = useState(0);
    const [runningCharCount, setRunningCharCount] = useState(0);
    const [finalWordCount, setFinalWordCount] = useState(0);
    const [finalCharCount, setFinalCharCount] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        setGamePrompt(getNewPrompt());
    }, []);

    useEffect(() => {
        let timerRef: any;
        if (gameState === 'select' || gameState === 'victory' || gameState === 'failed') {
            // If we are either in selection or completion of a game: Reset and calculate. stats
            clearInterval(timerRef);
            setWpm(() => {
                let res = runningWordCount / (time/60);
                setTime(0);
                setRunningWordCount((o) => { setFinalWordCount(o); return 0; });
                setRunningCharCount((o) => { setFinalCharCount(o); return 0; });
                return res;
            });
        } else {
            // If we are now in a game - we need to start a timer and calculate realtime WPM.
            timerRef = setInterval(() => {
                setTime((old) => old+1);
            }, 1000);
        }
        return () => clearInterval(timerRef);
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
            // stats
            setRunningWordCount((o) => o + 1);
            setRunningCharCount((o) => o + words[wordIdx].length);

            // Continue game
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
                { gameState !== 'select' ? (<InGameOptions setGameState={setGameState} time={time} resetGame={resetGame} />) : null }
            </Flex>
            <Flex 
                justifyContent="center" 
                alignItems="center" 
                minHeight="700px" 
                bg={gameBgColor}
            >
            {
                gameState === 'select' ? (<GameSelection setGameState={setGameState} reset={resetGame} />) :
                (gameState === 'victory' || gameState === 'defeat') ? (<GameCompletion gameState={gameState} setGameState={setGameState} wpm={wpm} charCount={finalCharCount} wordCount={finalWordCount} />) : 
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
