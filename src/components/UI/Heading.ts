import styled from 'styled-components';

type HeadingProps = {
  marginBottom: number; // as %
  size: number; // as rem
};

// NOTE: make sure to use the as='' prop for dynamic heading elements!
export const Heading = styled.div<HeadingProps>`
  font-size: ${({ size }) => `${size}rem`};
  line-height: 1.25;
  margin-bottom: ${({ marginBottom }) => `${marginBottom}%`};

  @media ${(props) => props.theme.mediaQueries.tabletPortrait} {
    margin-bottom: ${({ marginBottom }) => `${marginBottom * 2}%`};
  }
`;
