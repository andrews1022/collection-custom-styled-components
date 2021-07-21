import styled from 'styled-components';

export const ProgressRingWrapper = styled.div`
	position: relative;
`;

export const ProgressRingStyles = styled.svg`
	position: relative;
`;

export const AnimatedCircle = styled.circle`
	position: absolute;
	top: 0;
	left: 0;
	transform: rotate(-90deg);
	transform-origin: 50% 50%;
	transition: stroke-dashoffset 500ms;
`;
