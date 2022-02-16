import styled from 'styled-components';

type isActiveType = {
	isActive: boolean;
};

export const Wrapper = styled.div`
	padding: 0 4.5rem;
`;

export const Tagline = styled.h2`
	font-size: 1.5rem;
`;

export const FilterRow = styled.div`
	display: flex;
	margin: 1.5rem 0;
`;

export const FilterButton = styled.button<isActiveType>`
	background-color: ${({ isActive, theme }) =>
		isActive ? theme.colors.eastBay : theme.shades.white};
	border: 2px solid ${({ theme }) => theme.colors.eastBay};
	border-radius: 0.5rem;
	color: ${({ isActive, theme }) => (isActive ? theme.shades.white : theme.colors.eastBay)};
	cursor: pointer;
	font-weight: 500;
	margin-right: 1.5rem;
	padding: 1rem 3rem;
	transition: box-shadow 200ms ease-in-out, background-color 200ms ease-in-out;

	&:hover,
	&:active,
	&:focus {
		background-color: ${({ theme }) => theme.colors.eastBay};
		color: ${({ theme }) => theme.shades.white};
	}
`;

export const CardGrid = styled.div`
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(12, 1fr);
`;

export const Card = styled.div`
	grid-column: span 3;
	margin-bottom: 2rem;
`;

export const PicturePlaceholder = styled.div`
	height: 20vw;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.scandal};
	margin-bottom: 1.375rem;
`;

export const Name = styled.p`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
`;

export const Position = styled.p`
	font-size: 0.875rem;
`;
