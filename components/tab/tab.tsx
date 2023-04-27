import {
    Tab as HeadlessTab,
    TabProps as HeadLessTabProps
} from '@headlessui/react';
import { ElementType, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import { motion } from 'framer-motion';

const StyledTab = styled.div`
    position: relative;
    height: 36px;
    transition: all 0.5s ease-in-out;
    color: rgb(15, 23, 42);
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    :focus-visible {
        outline: none;
    }
`;

const StyledTabIndicator = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: white;
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border-radius: 2px;
`;

export type TabProps = HeadLessTabProps<ElementType>;

export const Tab: FC<TabProps> = props => {
    return (
        <HeadlessTab {...props} as={Fragment}>
            {({ selected }) => {
                return (
                    <StyledTab>
                        <div style={{ zIndex: 1, position: 'relative' }}>
                            {props.children as ReactNode}
                        </div>
                        {selected && <StyledTabIndicator layoutId="tab" transition={{duration: 0.25}} />}
                    </StyledTab>
                );
            }}
        </HeadlessTab>
    );
};
