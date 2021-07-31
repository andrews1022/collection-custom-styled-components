import styled from 'styled-components';

export interface IsOpened {
	isOpen: boolean;
}

export const AccordionItemWrapper = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 1.25rem;
	}
`;

export const ToggleBar = styled.div<IsOpened>`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.greys.whiteSmoke};
	border-radius: ${({ isOpen }) => (isOpen ? '1rem 1rem 0 0' : '1rem')};
	cursor: pointer;
	padding: 1rem;
	transition: border-radius 300ms ease-in-out;
`;

export const ToggleButton = styled.button`
	height: 2rem;
	width: 2rem;
	border: none;
	background-color: ${({ theme }) => theme.colors.scandal};
	border-radius: 50%;
	color: ${({ theme }) => theme.greys.nero};
	cursor: pointer;
	font-size: 1.625rem;
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	margin-right: 1rem;
`;

export const AccordionContent = styled.div<IsOpened>`
	border: 2px solid ${({ theme }) => theme.greys.whiteSmoke};
	border-radius: 0 0 1rem 1rem;
	line-height: 1.35;
	max-height: ${({ isOpen }) => (isOpen ? '15rem' : 0)};
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'visible')};
	padding: ${({ isOpen }) => (isOpen ? '1rem' : '0 1rem')};
	transition: max-height 300ms ease-in-out, opacity 300ms ease-in-out, padding 300ms ease-in-out;

	p {
		pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
		z-index: ${({ isOpen }) => (isOpen ? 1 : -1)};
	}
`;
