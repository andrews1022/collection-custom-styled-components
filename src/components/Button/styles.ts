import styled from 'styled-components';

type ButtonMode = 'primary' | 'secondary';

interface ButtonStylesProps {
	mode: ButtonMode;
}

const ButtonStyles = styled.button<ButtonStylesProps>`
	background-color: ${({ mode, theme }) =>
		mode === 'primary' ? theme.colors.eastBay : 'transparent'};
	border: 2px solid
		${({ mode, theme }) => (mode === 'primary' ? 'transparent' : theme.colors.eastBay)};
	border-radius: 0.5rem;
	color: ${({ mode, theme }) => (mode === 'primary' ? theme.shades.white : theme.colors.eastBay)};
	cursor: pointer;
	margin: 0 1rem;
	padding: 0.625rem 1.75rem;
	transition: all 200ms ease-in-out;

	&:hover {
		box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1);
		transform: translateY(-0.25rem);
	}
`;

export default ButtonStyles;
