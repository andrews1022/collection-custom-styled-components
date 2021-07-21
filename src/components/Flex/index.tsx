import React from 'react';
import { Children, AlignFlexItems, JustifyFlexItems } from '../../types/types';
import FlexStyles from './styles';

interface FlexProps {
	alignItems?: AlignFlexItems;
	justifyContent?: JustifyFlexItems;
	stackOnMobile?: boolean;

	children: Children;
}

const Flex = ({ children, alignItems, justifyContent, stackOnMobile }: FlexProps) => (
	<FlexStyles alignItems={alignItems} justifyContent={justifyContent} stackOnMobile={stackOnMobile}>
		{children}
	</FlexStyles>
);

export default Flex;
