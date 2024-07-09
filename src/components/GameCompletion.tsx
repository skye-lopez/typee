import {
    Flex,
    Text,
} from "@chakra-ui/react"

interface GameCompletionProps {
    gameState: string
    setGameState: Function
    wpm: Number
    charCount: Number
    wordCount: Number
}

export default function GameCompletion({ gameState, setGameState, wpm, charCount, wordCount } : GameCompletionProps) {
    return (
        <Flex direction="column">
            <Text>Game Over.</Text>
            <Text>WPM { wpm.toString() }</Text>
            <Text>Words typed: { wordCount.toString() }</Text>
            <Text>Chars typed: { charCount.toString() }</Text>
        </Flex>
    );
}
