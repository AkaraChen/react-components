import { Group, List, Tab } from '.';

export const Default = () => {
    return (
        <Group className={'w-48'}>
            <List>
                <Tab>React</Tab>
                <Tab>Vue</Tab>
            </List>
        </Group>
    );
};
