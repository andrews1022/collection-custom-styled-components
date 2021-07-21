import React from 'react';
import GridLayout from './styles';
import { AlignGridItems, Children } from '../../types/types';

interface GridProps {
	alignItems?: AlignGridItems;
	children: Children;
}

const Grid = ({ children, alignItems = 'center' }: GridProps) => (
	<GridLayout alignItems={alignItems}>{children}</GridLayout>
);

export default Grid;
