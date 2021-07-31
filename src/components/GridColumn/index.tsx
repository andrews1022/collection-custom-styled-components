import styled from 'styled-components';

// when consuming props for this component, use a 'layout' object containing either:

// a) a boolean noting the column should take up the entire width of the grid:
// ex: layout={{ isFullWidth: true }}

// b) a columns object which specifies the starting column number and the number of columns to span:
// ex: layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 5 } }}

// as well as an optional 'breakpoint' prop to specify when the columns should stack on mobile

interface GridColumnPropsA {
	isFullWidth: boolean;
}

interface GridColumnPropsB {
	columns: {
		startingColumn: number;
		numberOfColumnsToSpan: number;
	};
}

interface GridColumnProps {
	breakpoint?: string;
	layout: GridColumnPropsA | GridColumnPropsB;
}

const GridColumn = styled.div<GridColumnProps>`
	${({ layout }) =>
		'isFullWidth' in layout
			? 'grid-column: 1 / -1;'
			: `grid-column: ${layout.columns.startingColumn} / span ${layout.columns.numberOfColumnsToSpan};`}

	@media ${({ breakpoint, theme }) => breakpoint || theme.mediaQueries.tabletMedium} {
		grid-column: 1 / -1;
	}
`;

export default GridColumn;
