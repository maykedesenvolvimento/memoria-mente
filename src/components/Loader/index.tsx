import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import { colors } from '../../styles';
import { Container } from './styles';

const Loader: React.FC = () => (
    <Container>
        <SyncLoader color={colors.greens[2]} />
    </Container>
);
  
export default Loader;
  