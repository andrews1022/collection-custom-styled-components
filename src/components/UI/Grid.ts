import styled from 'styled-components';

// types
import type { ReactNode } from 'react';
import type { AlignGridItems } from '../../types/types';

// props
type GridProps = {
  alignItems?: AlignGridItems;
  children: ReactNode;
};

export const Grid = styled.div<GridProps>`
  display: grid;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  grid-gap: 1.5rem;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 4.5rem;

  @media ${({ theme }) => theme.mediaQueries.tabletMedium} {
    padding: 0 1.5rem;
  }
`;
