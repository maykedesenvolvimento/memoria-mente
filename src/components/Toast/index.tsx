import React from 'react';
import { Container } from './styles';

const Toast: React.FC = ({children}) => (
    <Container>
        {children}
    </Container>
);
  
export default Toast;
  