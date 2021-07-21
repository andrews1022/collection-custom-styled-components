import styled from 'styled-components';
import convertPxToRem from '../../util/convertPxToRem';

interface CopyStylesProps {
	color: string;
	size: number;
	weight: number;
}

const CopyStyles = styled.p<CopyStylesProps>`
	color: ${({ color }) => color};
	font-size: ${({ size }) => `${convertPxToRem(size)}`};
	font-weight: ${({ weight }) => weight};
	line-height: 1.5;
`;

export default CopyStyles;
