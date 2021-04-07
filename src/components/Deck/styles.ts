import styled from 'styled-components';
import { colors, sizes } from '../../styles';

interface ContainerProps {
    colorTone: number;
};

export const Container = styled.div`
    background-color: ${({colorTone}: ContainerProps) => colors.greens[colorTone]};
    height: 96px;
    flex: 1;
    border-radius: ${sizes.radius}px;
    position: relative;
    border: 1px solid ${colors.shadow};
    box-shadow: ${colors.shadow} 0px 2px 5px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Title = styled.h2`
    padding: ${sizes.spacing*2}px ${sizes.spacing*3}px;
    color: ${colors.white};
    font-weight: 500;
    font-size: 16px;
    margin: 0;
`;

export const Subtitle = styled.h3`
    padding: 0 ${sizes.spacing*3}px;
    color: ${colors.white};
    font-weight: 500;
    font-size: 12px;
    margin: 0;
`;

export const Image = styled.img`
    position: absolute;
    width: 60px;
    height: 60px;
    right: ${sizes.spacing*2}px;
    bottom: ${sizes.spacing*2}px;
    background-color: ${props => props.theme.color};
`;