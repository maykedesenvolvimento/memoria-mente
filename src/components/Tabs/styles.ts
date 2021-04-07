import styled from 'styled-components';
import { colors } from '../../styles';

interface Props {
    shaded?: boolean;
};

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    height: 10vh;
    width: 100%;
    color: ${colors.dark};
    min-height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props: Props) => props.shaded ? '0px -1px 4px '+colors.shadow : 'none'};
`;

interface TabProps {
    active?: boolean;
};

export const Tab = styled.div`
    font-weight: ${(props: TabProps) => props.active ? 600 : 400};
    color: ${colors.dark};
    flex: 1;
    text-align: center;
`;