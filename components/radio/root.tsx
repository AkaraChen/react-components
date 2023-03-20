import * as RadixRadio from '@radix-ui/react-radio-group';
import { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export type RootProps = RadixRadio.RadioGroupProps;

export const StyledRoot = styled(RadixRadio.Root)`
    display: flex;
    flex-direction: column;
    justify-items: center;
`;

export const Root: FC<RootProps> = props => {
    return (
        <motion.div layout>
            <StyledRoot {...props}>{props.children}</StyledRoot>
        </motion.div>
    );
};
