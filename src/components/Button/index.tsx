import React from 'react';
import { Children } from '../../types/types';
import ButtonStyles from './styles';

type ButtonMode = 'primary' | 'secondary';

interface ButtonsProps {
	mode: ButtonMode;
	children: Children;
}

const Button = ({ mode, children }: ButtonsProps) => (
	<ButtonStyles mode={mode}>{children}</ButtonStyles>
);

export default Button;
