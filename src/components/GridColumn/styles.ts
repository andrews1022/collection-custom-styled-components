import styled from 'styled-components';

interface GridColumnStylesPropsA {
	isFullWidth: boolean;
}

interface GridColumnStylesPropsB {
	columns: {
		startingColumn: number;
		numberOfColumnsToSpan: number;
	};
}

interface GridColumnStylesProps {
	layout: GridColumnStylesPropsA | GridColumnStylesPropsB;
}

const GridColumnStyles = styled.div<GridColumnStylesProps>`
	${({ layout }) =>
		'isFullWidth' in layout
			? 'grid-column: 1 / -1;'
			: `grid-column: ${layout.columns.startingColumn} / span ${layout.columns.numberOfColumnsToSpan};`}

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

export default GridColumnStyles;
