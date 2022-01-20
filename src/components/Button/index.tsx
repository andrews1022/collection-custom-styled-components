import { ButtonMode, Children } from '../../types/types';
import ButtonStyles from './styles';

interface ButtonsProps {
	children: Children;
	mode: ButtonMode;
}

const Button = ({ children, mode }: ButtonsProps) => (
	<ButtonStyles mode={mode}>{children}</ButtonStyles>
);

export default Button;
