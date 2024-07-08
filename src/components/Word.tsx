import {
    Flex,
    Box,
    Text,
    Input,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react"
import { useState, useEffect } from 'react';

interface WordProps {
    word: string
    idx: number
    selected: boolean
    userWord: string
    userIdx: number
    cursorIdx: number
    wordIdx: number
}

export default function Word({ word, idx, selected, userWord, userIdx, cursorIdx, wordIdx } : WordProps) {
    const errorColor = useColorModeValue("black", "white");
    const cursorColor = useColorModeValue("violet", "orange");
    return (
        <Flex>
            {
                 selected && word === " " ?
                 (<Flex minWidth="10px" maxHeight="40px" margin="0px 3px" bg={cursorColor}>{" "}</Flex>):
                  selected ?
                  word.split('').map((char, i) => 
                      <Text 
                          textDecoration="underline" 
                          fontSize="3xl"
                          color={i === cursorIdx ? cursorColor : char === userWord[i] ? 'green' : char !== userWord[i] && !!userWord[i] ? 'red' : 'inherit'}
                          background={char !== userWord[i] && !!userWord[i] ? errorColor : 'inherit'}
                      >
                          {char}
                      </Text>) :
                  (<Text fontSize="3xl">{ word !== " " ? word : <Box minWidth="10px" margin="0px 3px">&nbsp;</Box>}</Text>)
            }
        </Flex>
    );
}
