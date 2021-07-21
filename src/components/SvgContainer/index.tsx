import SvgContainerStyles from './styles';
import { Children } from '../../types/types';

interface SvgContainerProps {
	children: Children;
	widthInPx: number;
}

const SvgContainer = ({ children, widthInPx }: SvgContainerProps) => (
	<SvgContainerStyles widthInPx={widthInPx}>{children}</SvgContainerStyles>
);

export default SvgContainer;
