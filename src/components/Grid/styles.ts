import styled from 'styled-components';
import { AlignGridItems } from '../../types/types';

interface GridLayoutProps {
	alignItems?: AlignGridItems;
}

const GridLayout = styled.div<GridLayoutProps>`
	display: grid;
	align-items: ${({ alignItems }) => alignItems};
	grid-gap: 1.5rem;
	grid-template-columns: repeat(12, 1fr);
	padding: 0 4.5rem;
`;

export default GridLayout;
