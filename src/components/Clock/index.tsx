import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { colors } from '../../styles';

interface Props {
    seconds: number;
    paused: boolean;
    onFinish: () => void;
};

const Clock: React.FC<Props> = ({seconds, paused, onFinish}) => (
    <CountdownCircleTimer
        isPlaying={!paused}
        onComplete={onFinish}
        size={48}
        duration={seconds}
        strokeWidth={5}
        colors={[
            [colors.greens[3], 0.5],
            [colors.greens[1], 0.3],
            [colors.red, 0.2]
        ]}>{({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
);
  
export default Clock;
  