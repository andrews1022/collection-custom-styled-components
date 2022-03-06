/* eslint-disable no-unused-vars */

import React from 'react';

// styled components
import * as S from './styles';

// props
type AccordionItemProps = {
  activeIndex: null;
  data: {
    contentText: string;
    headingText: string;
    id: string;
  };
  index: number;
  toggleAccordionItem: (index: any) => void;
};

const AccordionItem = ({ activeIndex, data, index, toggleAccordionItem }: AccordionItemProps) => (
  <S.Wrapper>
    <S.Bar
      isOpen={index === activeIndex}
      onClick={() => toggleAccordionItem(index)}
      onKeyPress={() => toggleAccordionItem(index)}
      role='presentation'
    >
      <S.Toggle onClick={() => toggleAccordionItem(index)} type='button'>
        {index === activeIndex ? '-' : '+'}
      </S.Toggle>

      <h2>
        {data.headingText} {index + 1}
      </h2>
    </S.Bar>

    <S.Content isOpen={index === activeIndex}>
      <p>{data.contentText}</p>
    </S.Content>
  </S.Wrapper>
);

export default AccordionItem;
