import { IStackItemStyles, Link, Stack } from '@fluentui/react';
import { Text } from '@fluentui/react/lib/Text';
import { useAppDispatch } from '../app/hooks';
import { resetResponses } from '../features/calculator/calculatorSlice';
const footerStyles: IStackItemStyles = ({
    root: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        height: '100%',
        justifyContent: 'center'
    }
});

export default function Footer() {
    const dispatch = useAppDispatch();
    return (
        <Stack styles={footerStyles} >
            <Text variant="small">
                <Link onClick={() => dispatch(resetResponses())} underline style={{
                    textAlign: 'center'
                }}> Reset Scores
                </Link>
            </Text>
            <Text variant="tiny">
            Spondy Calculator: Copyright © 2021, Kurt Murrell <br />  BSD 2-Clause 'Simplified' License | <Link href="https://github.com/kurtmkurtm/SpondyCalculator" underline>
                    Github
                </Link>
            </Text>
        </Stack>
    );
}
