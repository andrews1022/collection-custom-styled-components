import styled from 'styled-components';
import convertPxToRem from '../../utils/convertPxToRem';

interface SvgContainerStylesProps {
	widthInPx: number;
}

const SvgContainerStyles = styled.div<SvgContainerStylesProps>`
	svg {
		width: ${({ widthInPx }) => `${convertPxToRem(widthInPx)}`};
	}
`;

export default SvgContainerStyles;
