import styled from 'styled-components';
import { AlignGridItems, Children } from '../../types/types';

interface GridProps {
	alignItems?: AlignGridItems;
	children: Children;
}

const Grid = styled.div<GridProps>`
	display: grid;
	align-items: ${({ alignItems }) => alignItems || 'center'};
	grid-gap: 1.5rem;
	grid-template-columns: repeat(12, 1fr);
	padding: 0 4.5rem;

	@media ${({ theme }) => theme.mediaQueries.tabletMedium} {
		padding: 0 1.5rem;
	}
`;

export default Grid;
