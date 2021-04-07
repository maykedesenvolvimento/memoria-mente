import React, { useState } from 'react';
import { Container, Field, FieldGroup, Label } from './styles';
import { Image } from '../../styles';

interface Props {
    label: string;
    placeholder: string;
    initialValue: string;
    min?: string;
    max?: string;
    onSave: (value: string) => void;
};

const Input: React.FC<Props> = ({label, placeholder, initialValue, min, max, onSave}) => {
    const [value, setValue] = useState(initialValue);

    return (<Container>
        <Label>{label}</Label>
        <FieldGroup>
            <Field value={value} onChange={e => setValue(e.target.value)} type='text' min={min} max={max} placeholder={placeholder} />
            <Image src='assets/images/checked.png' size={36} grayScale={value.length<3} onClick={() => onSave(value)} />
        </FieldGroup>
    </Container>);
};
  
export default Input;