import * as React from "react"
import {
  ChakraProvider,
  Flex,
  Spacer,
  Box,
  Text,
  theme,
  useColorModeValue,
  extendTheme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Game from './components/Game';
import { Logo } from "./Logo"

const t = extendTheme({
    styles: {
        global: (props: any) => ({
            'html, body': {
                color: props.colorMode === 'dark' ? 'white' : 'black',
                background: props.colorMode === 'dark' ? '#262626' : 'whitesmoke'
            }
        })
    }
});

export const App = () => {
    return (
  <ChakraProvider theme={t}>
    <Flex flexDirection='row' w="100%" h="100%" marginBottom="0">
        <Box padding="10px">
            <Text fontSize="2xl" as="b">typee.xyz</Text>
        </Box>
        <Spacer />
        <Box padding="10px">
            <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
    </Flex>
    <Game />
    <Flex alignItems="center" justifyContent="center">
        <Box>
            <Text as="b">@skye-lopez</Text>
        </Box>
    </Flex>
  </ChakraProvider>
  );
};
