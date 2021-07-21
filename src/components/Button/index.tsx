import { ButtonMode, Children } from '../../types/types';
import ButtonStyles from './styles';

interface ButtonsProps {
	mode: ButtonMode;
	children: Children;
}

const Button = ({ mode, children }: ButtonsProps) => (
	<ButtonStyles mode={mode}>{children}</ButtonStyles>
);

export default Button;
