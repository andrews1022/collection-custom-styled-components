import styled from 'styled-components';

const ScreenReaderTextStyles = styled.span`
	&:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;

export default ScreenReaderTextStyles;
