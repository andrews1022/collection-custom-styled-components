/* eslint-disable no-unused-vars */

import React from 'react';

// styled components
import { AccordionItemWrapper, ToggleBar, ToggleButton, AccordionContent } from './styles';

interface AccordionItemProps {
	activeIndex: null;
	data: {
		contentText: string;
		headingText: string;
		id: string;
	};
	index: number;
	toggleAccordionItem: (index: any) => void;
}

const AccordionItem = ({ activeIndex, data, index, toggleAccordionItem }: AccordionItemProps) => (
	<AccordionItemWrapper>
		<ToggleBar
			isOpen={index === activeIndex}
			onClick={() => toggleAccordionItem(index)}
			onKeyPress={() => toggleAccordionItem(index)}
			role='presentation'
		>
			<ToggleButton onClick={() => toggleAccordionItem(index)} type='button'>
				{index === activeIndex ? '-' : '+'}
			</ToggleButton>
			<h2>{data.headingText}</h2>
		</ToggleBar>

		<AccordionContent isOpen={index === activeIndex}>
			<p>{data.contentText}</p>
		</AccordionContent>
	</AccordionItemWrapper>
);

export default AccordionItem;
