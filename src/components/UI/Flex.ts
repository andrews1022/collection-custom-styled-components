import styled from 'styled-components';
import type { AlignFlexItems, JustifyFlexItems } from '../../types/types';

type FlexProps = {
	alignItems?: AlignFlexItems;
	justifyContent?: JustifyFlexItems;
	stackOnMobile?: boolean;
};

export const Flex = styled.div<FlexProps>`
	display: flex;

	${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
	${(props) => (props.justifyContent ? `justify-content: ${props.justifyContent};` : '')}

	@media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
		flex-direction: column;
	}
`;
