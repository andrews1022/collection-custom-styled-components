import React from 'react';
import { Children, AlignFlexItems, JustifyFlexItems } from '../../types/types';
import FlexStyles from './styles';

interface FlexProps {
	alignItems?: AlignFlexItems;
	justifyContent?: JustifyFlexItems;
	children: Children;
}

const Flex = ({ children, alignItems, justifyContent }: FlexProps) => (
	<FlexStyles alignItems={alignItems} justifyContent={justifyContent}>
		{children}
	</FlexStyles>
);

export default Flex;
