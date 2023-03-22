import { Tab as HeadlessTab, TabListProps } from '@headlessui/react';
import { motion } from 'framer-motion';
import { ElementType } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

const StyledList = styled(HeadlessTab.List)`
    background-color: rgb(242, 243, 245);
    display: flex;
    padding: 0.25em;
    width: fit-content;
    border-radius: 4px;
`;

export type ListProps = TabListProps<ElementType>;

export const List: FC<ListProps> = props => {
    return (
        <StyledList as={motion.div} layout {...props}>
            {props.children}
        </StyledList>
    );
};
