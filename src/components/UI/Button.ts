// NOTE: With this component, you will still need to add on the "type" prop and an appropiate value

import styled from 'styled-components';

// an example of primary/secondary (solid, hollow)
type ButtonsProps = {
  mode: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonsProps>`
  background-color: ${({ mode, theme }) =>
    mode === 'primary' ? theme.colors.eastBay : 'transparent'};
  border: 2px solid
    ${({ mode, theme }) => (mode === 'primary' ? 'transparent' : theme.colors.eastBay)};
  border-radius: 0.5rem;
  color: ${({ mode, theme }) => (mode === 'primary' ? theme.shades.white : theme.colors.eastBay)};
  cursor: pointer;
  margin: 0 1rem;
  padding: 0.625rem 1.75rem;
  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;

  &:hover {
    box-shadow: 0 0.625rem 0.75rem 0 rgba(0, 0, 0, 0.1);
  }
`;
