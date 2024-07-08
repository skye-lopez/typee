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
    userWord: string
    userIdx: number
    cursorIdx: number
}

export default function Word({ word, idx, selected, userWord, userIdx, cursorIdx } : WordProps) {
    return (
        <Flex>
            {
                 selected && word === " " ?
                 (<Flex minWidth="10px" bg={"pink"}>{" "}</Flex>):
                  selected ?
                  word.split('').map((char, i) => 
                      <Text 
                          fontWeight="bold" 
                          textDecoration="underline" 
                          fontSize="3xl"
                          color={i === cursorIdx ? 'pink' : char === userWord[i] ? 'green' : char !== userWord[i] && !!userWord[i] ? 'red' : 'inherit'}
                      >
                          {char}
                      </Text>) :
                  (<Text fontSize="3xl">{ word !== " " ? word : <span>&nbsp;</span>}</Text>)
            }
        </Flex>
    );
}
