import {
    Flex,
    Text,
} from "@chakra-ui/react"

interface GameCompletionProps {
    gameState: string
    setGameState: Function
}

export default function GameCompletion({ gameState, setGameState } : GameCompletionProps) {
    return (
        <Flex>
            <Text>Game Over.</Text>
        </Flex>
    );
}
