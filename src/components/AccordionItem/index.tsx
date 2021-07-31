import React from 'react';

// styled components
import { AccordionItemWrapper, ToggleBar, ToggleButton, AccordionContent } from './styles';

interface AccordionItemProps {
	data: {
		id: string;
		headingText: string;
		contentText: string;
	};
	index: number;
	activeIndex: null;
	toggleAccordionItem: (index: any) => void;
}

const AccordionItem = ({ data, index, activeIndex, toggleAccordionItem }: AccordionItemProps) => (
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
