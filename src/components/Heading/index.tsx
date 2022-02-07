// Dynamically render any heading element (h1-6), along with dynamic styles
// This component is purely text, and can be re-used heavily throughout a project

import React from 'react';

// styles
import { HeadingStylesProps, HeadingStyles } from './styles';

// props
import { Children, HeadingType } from '../../types/types';

interface HeadingProps extends HeadingStylesProps {
	children: Children;
	element: HeadingType;
}

const Heading = ({ color, fontSizeInPx, children, element }: HeadingProps) => (
	<HeadingStyles as={element} color={color} fontSizeInPx={fontSizeInPx}>
		{children}
	</HeadingStyles>
);

export default Heading;

// Some areas for improvement/consideration:
// 1A) change the fontSizeInPx prop to 'size' that takes a string 'small', 'medium', 'large', etc.
// 1B) change the fontSizeInPx prop to 'type' that takes a string 'hero', 'tagline', etc.
// 2) set a default value for the 'color' prop so it's optional and doesn't need to be set each time
// 3) see if there's a way to consolidate index.tsx and styles.ts into 1 file for easier maintenance
