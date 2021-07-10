// Dynamically render any heading element (h1-6), along with dynamic styles

import React from 'react';
import styled from 'styled-components';

interface HeadingProps {
	// styles
	color: string;
	size: number;
	weight: number;

	// non-styles
	element: React.ComponentType<any> | string;
	children: React.ReactNode;
}

const HeadingStyles = styled.div<{ color: string; size: number; weight: number }>`
	color: ${({ color }) => color};
	font-size: ${({ size }) => `${size / 16}rem`};
	font-weight: ${({ weight }) => weight};
`;

const Heading = ({ color, size, weight, element, children }: HeadingProps) => {
	return (
		<HeadingStyles color={color} size={size} weight={weight} as={element}>
			{children}
		</HeadingStyles>
	);
};

export default Heading;
