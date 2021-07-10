import React from 'react';
import styled from 'styled-components';

interface CopyProps {
	children: React.ReactNode;
}

const CopyStyles = styled.p`
	color: ${({ theme }) => theme.fontColorMalachite};
`;

const Copy = ({ children }: CopyProps) => {
	return <CopyStyles>{children}</CopyStyles>;
};

export default Copy;
