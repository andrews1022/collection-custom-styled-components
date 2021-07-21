// Dynamically render any heading element (h1-6), along with dynamic styles
// This component is purely text, and will be used throughout in virtually every other component

import React from 'react';
import { HeadingStylesProps, HeadingStyles } from './styles';
import { Children, HeadingType } from '../../types/types';

interface HeadingProps extends HeadingStylesProps {
	// other
	children: Children;
	element: React.ComponentType<any> | HeadingType;
}

const Heading = ({ color, fontSizeInPx, children, element }: HeadingProps) => (
	<HeadingStyles color={color} fontSizeInPx={fontSizeInPx} as={element}>
		{children}
	</HeadingStyles>
);

export default Heading;
