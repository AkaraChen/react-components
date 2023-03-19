import type { GlobalProvider } from '@ladle/react';
import React from 'react';
import 'normalize.css/normalize.css';
import './main.css';

export const Provider: GlobalProvider = ({ children }) => <div>{children}</div>;
