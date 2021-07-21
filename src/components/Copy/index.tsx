import CopyStyles from './styles';
import { Children } from '../../types/types';

interface CopyProps {
	// styles
	color: string;
	size?: number;
	weight?: number;

	// other
	children: Children;
}

const Copy = ({ color, size = 16, weight = 400, children }: CopyProps) => (
	<CopyStyles color={color} size={size} weight={weight}>
		{children}
	</CopyStyles>
);

export default Copy;
