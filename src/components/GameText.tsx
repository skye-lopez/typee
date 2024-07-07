import { useState, useEffect } from "react";
import {
    Text,
    Flex,
    useColorModeValue,
} from "@chakra-ui/react";

export default function GameText(props: any) {
    const textColor = useColorModeValue("white", "black");
    const textColorUnderline = useColorModeValue("blue", "orange");
    const [selected, setSelected] = useState(false);
    const [wrong, setWrong] = useState(false);

    useEffect(() => {
        if (props.pos === props.num) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [props.pos]);

    useEffect(() => {
        if (props.userChar !== props.char && !!props.userChar) {
            setWrong(true);
        } else {
            setWrong(false);
        }
    }, [props.userChar]);

    return (
        <Flex minWidth='6px'>
            { props.char === ' ' ? (
                <Text bg={wrong ? 'red' : 'inherit'}>
                    &nbsp;
                </Text>
            ) : (
                <Text color={textColor} bg={wrong ? 'red' : selected ? textColorUnderline : "inherit"} as='b'>
                    { props.char }
                </Text>
            )}
        </Flex>
    );
}

// We want to also ingest userText[num]
// If it exists and is not pos and is wrong:
//   highlight red as wrong
