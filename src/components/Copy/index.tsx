import styled from 'styled-components';

type CopyProps = {
	color: string;
};

const Copy = styled.p<CopyProps>`
	color: ${({ color }) => color};
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fontWeights.regular};
	line-height: 1.5;
`;

export default Copy;
