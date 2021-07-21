import React from 'react';
import GridColumnStyles from './styles';
import { Children } from '../../types/types';

// when consuming props for this component, use a 'layout' object containing either:

// a) a boolean noting the column should take up the entire width of the grid:
// ex: layout={{ isFullWidth: true }}

// b) a columns object which specifies the starting column number and the number of columns to span:
// ex: layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 5 } }}

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
	layout: GridColumnPropsA | GridColumnPropsB;
	children: Children;
}

const GridColumn = ({ layout, children }: GridColumnProps) => (
	<GridColumnStyles layout={layout}>{children}</GridColumnStyles>
);

export default GridColumn;
