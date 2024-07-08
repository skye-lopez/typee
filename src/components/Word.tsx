import {
    Flex,
    Box,
    Text,
    Input,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react"

interface WordProps {
    word: string
    idx: number
    selected: boolean
}

export default function Word({ word, idx, selected } : WordProps) {
    return (
        <Flex>
            {
                selected ?
                (<Text
                    fontWeight="bold"
                    textDecoration="underline"
                    fontSize="3xl"
                >
                    {word}
                </Text>) :
                (<Text fontSize="3xl">{ word !== " " ? word : <span>&nbsp;</span>}</Text>)
            }
        </Flex>
    );
}
