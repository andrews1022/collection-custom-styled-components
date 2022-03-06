import React from 'react';

// styled components
import * as S from './styles';

// props
type ProgressRingProps = {
  radius: number;
  slideDuration: number;
  stroke: number;
};

const ProgressRing = ({ radius, slideDuration, stroke }: ProgressRingProps) => {
  const normalizedRadius = radius - stroke * 2;

  const progressRingDimensions = {
    height: (radius * 2) / 16,
    width: (radius * 2) / 16
  };

  const VIEW_BOX_DIMENSIONS = '0 0 50 50';
  const CX_CY_VALUE = '50%';

  return (
    <S.Wrapper>
      <S.Ring dimensions={progressRingDimensions} viewBox={VIEW_BOX_DIMENSIONS}>
        <S.BaseCircle cx={CX_CY_VALUE} cy={CX_CY_VALUE} r={normalizedRadius / 2.5} />
        <S.AnimatedCircle
          cx={CX_CY_VALUE}
          cy={CX_CY_VALUE}
          r={normalizedRadius / 2.5}
          slideDuration={slideDuration}
        />
      </S.Ring>
    </S.Wrapper>
  );
};

export default ProgressRing;
