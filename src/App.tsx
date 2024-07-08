import * as React from "react"
import {
  ChakraProvider,
  Flex,
  Spacer,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Game from './components/Game';
import { Logo } from "./Logo"

const theme = {
    styles: {
        golbal: (props: any) => ({
            'html, body': {
                color: props.colorMode === 'dark' ? 'whitesmoke' : 'black',
                background: props.colorMode === 'dark' ? 'whitesmoke' : 'black'
            }
        })
    }
}

export const App = () => {
    return (
  <ChakraProvider theme={theme}>
    <Flex flexDirection='row' w="100%" h="100%" marginBottom="5">
        <Box padding="10px">
            <Text fontSize="2xl" as="b">typee.xyz</Text>
        </Box>
        <Spacer />
        <Box padding="10px">
            <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
    </Flex>
    <Game />
    <Flex alignItems="center" justifyContent="center" marginTop="7">
        <Box>
            <Text as="b">A project by skye-lopez</Text>
        </Box>
    </Flex>
  </ChakraProvider>
  );
};
