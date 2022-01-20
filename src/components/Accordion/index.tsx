import React, { useState } from 'react';

// components
import AccordionItem from '../AccordionItem';
import Grid from '../Grid';
import GridColumn from '../GridColumn';

// styled-components

// mock data
import mockAccordionData from './data';

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordionItem = (index: any) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<Grid>
			<GridColumn layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 6 } }}>
				<ul className='accordion'>
					{mockAccordionData.map((data, index) => (
						<AccordionItem
							key={data.id}
							activeIndex={activeIndex}
							data={data}
							index={index}
							toggleAccordionItem={toggleAccordionItem}
						/>
					))}
				</ul>
			</GridColumn>
		</Grid>
	);
};

export default Accordion;
