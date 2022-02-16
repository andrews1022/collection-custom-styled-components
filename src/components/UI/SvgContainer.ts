import styled from 'styled-components';

type SvgWrapperProps = {
	width: number;
};

export const SvgWrapper = styled.div<SvgWrapperProps>`
	svg {
		width: ${({ width }) => `${width}rem`};
	}
`;
