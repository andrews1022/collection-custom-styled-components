import ScreenReaderTextStyles from './styles';
import { Children } from '../../types/types';

interface ScreenReaderTextProps {
	children: Children;
}

const ScreenReaderText = ({ children }: ScreenReaderTextProps) => (
	<ScreenReaderTextStyles>{children}</ScreenReaderTextStyles>
);

export default ScreenReaderText;
