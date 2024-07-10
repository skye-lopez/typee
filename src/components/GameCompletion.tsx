import {
    Flex,
    Text,
} from "@chakra-ui/react"

interface GameCompletionProps {
    gameState: string
    setGameState: Function
    wpm: number
    charCount: number
    wordCount: number
}

export default function GameCompletion({ gameState, setGameState, wpm, charCount, wordCount } : GameCompletionProps) {
    return (
        <Flex direction="column">
            <Text>Game Over.</Text>
            <Text>WPM { Math.floor(wpm).toString() }</Text>
            <Text>Words typed: { wordCount.toString() }</Text>
            <Text>Chars typed: { charCount.toString() }</Text>
        </Flex>
    );
}
