import styled from 'styled-components';
import { colors, sizes } from '../../styles';

export const Container = styled.div`
    font-size: 16px;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FieldGroup = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Field = styled.input`
    outline: none;
    padding: ${sizes.spacing*2}px;
    border: 1px solid ${colors.gray};
    border-radius: ${sizes.radius}px;
    color: ${colors.dark};
    font-weight: 500;
    flex: 1;
    margin-right: ${sizes.spacing*2}px;
`;

export const Label = styled.label`
    color: ${colors.greens[0]};
    font-weight: 600;
    margin-bottom: ${sizes.spacing*2}px;
`;