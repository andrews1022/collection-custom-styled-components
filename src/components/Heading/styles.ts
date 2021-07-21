import styled from 'styled-components';
import convertPxToRem from '../../utils/convertPxToRem';

export interface HeadingStylesProps {
	color: string;
	fontSizeInPx: number;
}

export const HeadingStyles = styled.div<HeadingStylesProps>`
	color: ${({ color }) => color};
	font-size: ${({ fontSizeInPx }) => `${convertPxToRem(fontSizeInPx)}`};
	font-weight: ${({ theme }) => theme.fontWeights.semiBold};
	line-height: 1.15;
`;
