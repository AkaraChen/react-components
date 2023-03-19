import { Tab as HeadlessTab, TabGroupProps } from '@headlessui/react';
import { ElementType, FC } from 'react';

export type GroupProps = TabGroupProps<ElementType>;

export const Group: FC<GroupProps> = props => {
    return <HeadlessTab.Group {...props} />;
};
