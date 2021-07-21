import React, { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import { ProgressRingWrapper, ProgressRingStyles, AnimatedCircle } from './styles';

interface ProgressRingProps {
	radius: number;
	stroke: number;
}

const ProgressRing = ({ radius, stroke }: ProgressRingProps) => {
	const [progress, setProgress] = useState(0);

	const normalizedRadius = radius - stroke * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - (progress / 100) * circumference;

	const updateProgress = () => {
		setTimeout(() => {
			setProgress(progress + 5);
		}, 200);
	};

	useEffect(() => {
		if (progress < 100) updateProgress();
	}, [progress]);

	const { colors, greys } = theme;

	return (
		<ProgressRingWrapper>
			<ProgressRingStyles height={radius * 2} width={radius * 2}>
				<circle
					stroke={greys.whiteSmoke}
					fill='transparent'
					strokeWidth={stroke}
					style={{ strokeDashoffset }}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
				<AnimatedCircle
					stroke={colors.creamBrulee}
					fill='transparent'
					strokeWidth={stroke}
					strokeDasharray={`${circumference} ${circumference}`}
					style={{ strokeDashoffset }}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
					id='circle-to-animate'
				/>
			</ProgressRingStyles>
		</ProgressRingWrapper>
	);
};

export default ProgressRing;
