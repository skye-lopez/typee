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
}

export default function Word({ word, idx, selected, userWord, userIdx } : WordProps) {
    return (
        <Flex>
            {
                 selected && word === " " ?
                 (<Flex minWidth="10px" bg={"red"}>{" "}</Flex>):
                  selected ?
                  word.split('').map((char, i) => 
                      <Text 
                          fontWeight="bold" 
                          textDecoration="underline" 
                          fontSize="3xl"
                          color={i === userIdx ? 'red' : 'inherit'}
                      >
                          {char}
                      </Text>) :
                  (<Text fontSize="3xl">{ word !== " " ? word : <span>&nbsp;</span>}</Text>)
            }
        </Flex>
    );
}
