# @akrc/rc

Yet another react component library for web.

## Installation

```bash
pnpm install @akrc/rc
```

## Usage

```tsx
import { Tab, Group, List, Panels, Panel } from '@akrc/rc/tab';

export default function App() {
    return (
        <Group>
            <List>
                <Tab>React</Tab>
                <Tab>Vue</Tab>
            </List>
        </Group>
    );
}
```

This library use `styled-component` under the hood, so you don't need to import any css file (I hate css-in-js, but it's very helpful in component library).

Because I'm too lazy to optimize the bundle workflow, so you need to upgrade your TypeScript version to `^5.0.0` to enjoy fully TypeScript support.
