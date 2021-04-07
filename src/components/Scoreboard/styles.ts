import styled from 'styled-components';
import { colors, sizes } from '../../styles';

export const Container = styled.div`
    width: 100%;
    max-height: 80vh;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-self: center;
`;

interface RowProps {
    contrast?: boolean;
};

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props: RowProps) => props.contrast ? colors.greens[1] : colors.white};
    color: ${(props: RowProps) => props.contrast ?  colors.white : colors.greens[1]};
    padding: ${sizes.spacing}px ${sizes.spacing*3}px;
    margin: ${sizes.spacing}px ${sizes.spacing*2}px;
    border-radius: ${sizes.radius}px;
    box-shadow: 1px 1px 2px ${colors.shadow};
`;

interface ColProps {
    size: number;
};

export const Col = styled.div`
    font-size: 14px;
    font-weight: 500;
    flex: ${(props: ColProps) => props.size};
`;