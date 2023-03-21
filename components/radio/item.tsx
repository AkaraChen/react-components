import * as RadixRadio from '@radix-ui/react-radio-group';
import * as RadixLabel from '@radix-ui/react-label';
import { motion } from 'framer-motion';
import { FC, useId, useState } from 'react';
import styled from 'styled-components';

export type ItemProps = RadixRadio.RadioGroupItemProps;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

const StyledItem = styled(RadixRadio.Item)`
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    border: gray solid 2px;
    &[aria-checked='true'] {
        border-color: #1677ff;
    }
`;

const StyledIndicator = styled(RadixRadio.Indicator)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    :after {
        position: absolute;
        content: '';
        display: block;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #1677ff;
    }
`;

const StyledHoverIndicator = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: 8px;
    z-index: 1;
    pointer-events: none;
`;

const StyledLabel = styled(RadixLabel.Root)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
`;

const StyledSpan = styled.span`
    margin-left: 0.5em;
`;

export const Item: FC<ItemProps> = props => {
    const id = useId();
    const [hover, setHover] = useState(false);
    return (
        <StyledContainer
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <StyledLabel htmlFor={id} style={{ display: 'flex' }}>
                <StyledItem {...props} id={id}>
                    <StyledIndicator />
                </StyledItem>
                <StyledSpan>{props.children}</StyledSpan>
            </StyledLabel>
            {hover && (
                <StyledHoverIndicator
                    layoutId="radio"
                    initial={{ opacity: 0.03 }}
                />
            )}
        </StyledContainer>
    );
};
