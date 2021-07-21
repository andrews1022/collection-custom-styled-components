import styled from 'styled-components';

interface CopyStylesProps {
	color: string;
}

const CopyStyles = styled.p<CopyStylesProps>`
	color: ${({ color }) => color};
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	line-height: 1.5;
`;

export default CopyStyles;
