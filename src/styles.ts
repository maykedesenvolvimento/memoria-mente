import styled from 'styled-components';

export const colors = {
    light: '#E8F3F1',
    dark: '#2F4858',
    gray: '#9FADBD',
    red: '#e74c3c',
    greens: [
        '#2C6073',
        '#227A8A',
        '#18959B',
        '#26AFA6',
        '#48CAAA'
    ],
    white: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.12)'
};

export const sizes = {
    radius: 6,
    spacing: 4
};

export const Container = styled.div`
    background-color: ${colors.light};
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    color: ${colors.dark};
    height: 10vh;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 0px 1px 4px ${colors.shadow};
`;

export const Body = styled.div`
    height: 80vh;
    padding: ${sizes.spacing*2}px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 18px;
    font-weight: 600;
    margin: 0;
`;

export const Subtitle = styled.h3`
    font-size: 12px;
    font-weight: 500;
    margin: 0;
`;

interface GridProps {
    cols: number;
    gap: number;
};

export const Grid = styled.div`
    width: 100%;
    max-height: 80vh;
    overflow: scroll;
    padding: ${(props: GridProps) => props.gap*sizes.spacing}px;
    gap: ${(props: GridProps) => props.gap*sizes.spacing}px;
    display: grid;
    grid-template-columns: repeat(${(props: GridProps) => props.cols}, 1fr);
`;

export const TopRight = styled.div`
    position: absolute;
    right: ${sizes.spacing*2}px;
    top: ${sizes.spacing*2}px;
`;

export const BottomRight = styled.div`
    position: absolute;
    bottom: ${sizes.spacing*2}px;
    right: ${sizes.spacing*2}px;
`;

interface ImageProps {
    grayScale?: boolean;
    size?: number;
    margin?: number;
};

export const Image = styled.img`
    filter: ${(props: ImageProps) => props.grayScale ? 'grayscale(0.8)' : 'none'};
    width: ${(props: ImageProps) => (props.size || 48)}px;
    height: ${(props: ImageProps) => (props.size || 48)}px;
    margin: ${(props: ImageProps) => ((props.margin || 0)*sizes.spacing)}px;
`;