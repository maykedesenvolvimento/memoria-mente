import styled from 'styled-components';
import { colors, sizes } from '../../styles';

const Card = styled.div`
    flex: 1;
    height: 48px;
    box-shadow: ${colors.shadow} 0px 2px 5px 0px;
    border-radius: ${sizes.radius}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled(Card)`
    background-color: ${colors.white};
    border: 1px solid ${colors.gray};
`;

export const Empty = styled(Card)`
    background-color: ${colors.greens[1]};
    border: 1px solid ${colors.shadow};
`;

export const Image = styled.img`
    width: 36px;
    height: 36px;
`;