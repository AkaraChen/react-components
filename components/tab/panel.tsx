import { Tab as HeadlessTab, TabPanelProps } from '@headlessui/react';
import { ElementType } from 'react';

export type PanelProps = TabPanelProps<ElementType>;

export const Panel: React.FC<PanelProps> = props => {
    return <HeadlessTab.Panel {...props} />;
};
