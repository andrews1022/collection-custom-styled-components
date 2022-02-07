import React from 'react';

// styles
import ButtonStyles from './styles';

// types
import { ButtonMode, Children } from '../../types/types';

interface ButtonsProps {
	children: Children;
	mode: ButtonMode;
}

const Button = ({ children, mode }: ButtonsProps) => (
	<ButtonStyles mode={mode}>{children}</ButtonStyles>
);

export default Button;
