import styled from 'styled-components';
import { AlignFlexItems, JustifyFlexItems } from '../../types/types';

interface FlexStylesProps {
	alignItems?: AlignFlexItems;
	justifyContent?: JustifyFlexItems;
	stackOnMobile?: boolean;
}

const FlexStyles = styled.div<FlexStylesProps>`
	display: flex;

	${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
	${(props) => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}

  ${(props) =>
		props.stackOnMobile
			? `@media ${props.theme.mediaQueries.tabletPortrait} { flex-direction: column; }`
			: ''}
`;

export default FlexStyles;
