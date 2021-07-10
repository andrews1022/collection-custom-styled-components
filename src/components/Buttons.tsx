import React from 'react';
import styled from 'styled-components';

interface ButtonsProps {
	mode: string;
	isPrimary: boolean;
}

const handleButtonMode = (mode: string) => {
	switch (mode) {
		case 'solid':
			return `
        background-color: #2f2da2;
        color: #f4f4f4;

        &:hover {
          background-color: #4643c4;
        }
      `;

		case 'hollow':
			return `
        background-color: transparent;
        color: #2f2da2;
        border-color: #2f2da2;

        &:hover {
          background-color: #2f2da2;
          color: #f4f4f4;
        }
      `;

		default:
			break;
	}
};

const ButtonStyles = styled.button<{ mode: string; isPrimary: boolean }>`
	border: 2px solid transparent;
	border-radius: ${({ isPrimary }) => (isPrimary ? '0.25rem' : '1rem')};
	margin: 0 1rem;
	padding: 0.625rem 1.75rem;

	${(props) => handleButtonMode(props.mode)}

	&:hover {
		cursor: pointer;
	}
`;

const Buttons = ({ mode, isPrimary }: ButtonsProps) => {
	return (
		<>
			<ButtonStyles mode={mode} isPrimary={isPrimary}>
				Click Me!
			</ButtonStyles>
		</>
	);
};

export default Buttons;
