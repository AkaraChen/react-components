import { Tab as HeadlessTab, TabPanelsProps } from '@headlessui/react';
import { ElementType } from 'react';

export type PanelsProps = TabPanelsProps<ElementType>;

export const Panels: React.FC<PanelsProps> = props => {
    return <HeadlessTab.Panels {...props} />;
};
