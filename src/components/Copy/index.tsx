import CopyStyles from './styles';
import { Children } from '../../types/types';

interface CopyProps {
	// styles
	color: string;

	// other
	children: Children;
}

const Copy = ({ color, children }: CopyProps) => <CopyStyles color={color}>{children}</CopyStyles>;

export default Copy;
