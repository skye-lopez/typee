import {
    Flex,
    Stack,
    Text,
} from "@chakra-ui/react";
import SelectionButton from './SelectionButton';

interface GameSelectionProps {
    setGameState: Function
    reset: Function
}

export default function GameSelection({ setGameState, reset }: GameSelectionProps) {
    return (
        <Flex flexDirection="column" alignItems="center">
                <Text as="b" fontSize="20px" marginBottom="10px">Select a game mode</Text>
            <Stack direction='column' spacing={4}>
                <SelectionButton 
                    btnText={"Endless"} 
                    infoText={"Type practice for as long as you want."} 
                    update={setGameState}
                    reset={reset}
                />
                <SelectionButton 
                    btnText={"Prompt"} 
                    infoText={"See how quickly you can type a short prompt."} 
                    update={setGameState}
                    reset={reset}
                />
                <SelectionButton 
                    btnText={"Survival"} 
                    infoText={"How long can you type without making a mistake?"} 
                    update={setGameState}
                    reset={reset}
                />
            </Stack>
        </Flex>
    );
}
