import styled from 'styled-components';

// props
type RingProps = {
  dimensions: {
    height: number;
    width: number;
  };
};

type AnimatedCircleProps = {
  slideDuration: number;
};

export const Wrapper = styled.div`
  transition: opacity 150ms ease-in-out;
`;

export const Ring = styled.svg<RingProps>`
  position: relative;
  height: ${({ dimensions }) => `${dimensions.height}rem`};
  width: ${({ dimensions }) => `${dimensions.width}rem`};
  transform: rotate(-90deg);
`;

export const BaseCircle = styled.circle`
  fill: transparent;
  stroke: ${({ theme }) => theme.greys.whiteSmoke};
  stroke-width: 0.125rem;
`;

export const AnimatedCircle = styled.circle<AnimatedCircleProps>`
  @keyframes fill-progress-ring {
    to {
      stroke-dashoffset: 0;
    }
  }

  animation-name: fill-progress-ring;
  animation-duration: ${({ slideDuration }) => `${slideDuration}ms`};
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.eastBay};
  stroke-dasharray: 152;
  stroke-dashoffset: 152;
  stroke-width: 0.125rem;
`;
