import React, { useState } from 'react';

// components
import AccordionItem from '../AccordionItem';

// styled components
import { Grid } from '../UI/Grid';
import { GridColumn } from '../UI/GridColumn';

// data
import accordionData from './data';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordionItem = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Grid>
      <GridColumn layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 6 } }}>
        <ul className='accordion'>
          {accordionData.map((data, index) => (
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
