import * as React from "react"
import {
  ChakraProvider,
  Flex,
  Spacer,
  Box,
  Stack,
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
        <Stack padding="10px" direction='row'>
            <Text fontSize="2xl" as="b">typee.xyz</Text>
            <Text>(v0.0.1 - bugs and low features)</Text>
        </Stack>
        <Spacer />
        <Box padding="10px">
            <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
    </Flex>
    <Game />
    <Flex alignItems="center" justifyContent="center" marginTop="20px">
        <Box>
            <Text as="b">Made by Aria Lopez</Text>
        </Box>
    </Flex>
  </ChakraProvider>
  );
};
