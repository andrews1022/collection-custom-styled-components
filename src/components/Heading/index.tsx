// Dynamically render any heading element (h1-6), along with dynamic styles
// This component is purely text, and will be used throughout in virtually every other component

import React from 'react';
import HeadingStyles from './styles';
import { Children } from '../../types/types';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
	// styles
	color: string;
	fontSizeInPx: number;
	fontWeight?: number;

	// other
	children: Children;
	element: React.ComponentType<any> | HeadingType;
}

const Heading = ({ color, fontSizeInPx, children, element, fontWeight = 400 }: HeadingProps) => (
	<HeadingStyles color={color} fontSizeInPx={fontSizeInPx} fontWeight={fontWeight} as={element}>
		{children}
	</HeadingStyles>
);

export default Heading;
