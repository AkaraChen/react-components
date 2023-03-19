import { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const OutlineButton = styled.button<ButtonProps>`
    border: 1px solid #000;
    background: #fff;
    color: #000;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;

export const Button: FC<ButtonProps> = props => {
    return <OutlineButton {...props}>Button</OutlineButton>;
};
