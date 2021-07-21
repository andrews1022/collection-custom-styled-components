import styled from 'styled-components';
import convertPxToRem from '../../util/convertPxToRem';

interface HeadingStylesProps {
	color: string;
	fontSizeInPx: number;
	fontWeight: number;
}

const HeadingStyles = styled.div<HeadingStylesProps>`
	color: ${({ color }) => color};
	font-size: ${({ fontSizeInPx }) => `${convertPxToRem(fontSizeInPx)}`};
	font-weight: ${({ fontWeight }) => fontWeight};
	line-height: 1.15;
`;

export default HeadingStyles;
