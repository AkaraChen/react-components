import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-ts';
import jsx from 'acorn-jsx';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import fs from 'node:fs';

const config = {
    plugins: [
        typescript({
            transpiler: 'swc',
            swcConfig: './.swcrc'
        }),
        nodeResolve(),
        commonjs()
    ],
    acornInjectPlugins: [jsx()],
    external: [
        'react',
        'react/jsx-runtime',
        'styled-components',
        '@headlessui/react',
        'framer-motion',
        '@radix-ui/react-radio-group',
        'react-dom'
    ]
};

const list = fs.readdirSync('components');

export default defineConfig(
    list.map(component =>
        Object.assign({}, config, {
            input: `components/${component}/index.ts`,
            output: {
                dir: `./dist/${component}`,
                format: 'esm',
                sourcemap: true
            }
        })
    )
);
