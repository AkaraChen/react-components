import * as RadixRadio from '@radix-ui/react-radio-group';
import * as RadixLabel from '@radix-ui/react-label';
import { FC, useId } from 'react';
import styled from 'styled-components';

export type ItemProps = RadixRadio.RadioGroupItemProps;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
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

const StyledLabel = styled(RadixLabel.Root)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    transition: all 0.25s;
    border-radius: 4px;
    &:hover {
        background: rgba(0, 0, 0, 5%);
    }
`;

const StyledSpan = styled.span`
    margin-left: 8px;
`;

export const Item: FC<ItemProps> = props => {
    const id = useId();
    return (
        <StyledContainer>
            <StyledLabel htmlFor={id}>
                <StyledItem {...props} id={id}>
                    <StyledIndicator />
                </StyledItem>
                <StyledSpan>{props.children}</StyledSpan>
            </StyledLabel>
        </StyledContainer>
    );
};
