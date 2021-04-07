import React from 'react';
import { getRandom } from '../../services/utils';
import { Container, Title, Subtitle, Image } from './styles';

interface Props {
    title: string;
    subtitle: string;
    image: string;
    colorTone: number;
    onClick: () => void;
};

const Deck: React.FC<Props> = ({title, subtitle, image, colorTone, onClick}) => {
    return (
        <Container colorTone={colorTone} onClick={onClick}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Image src={image} />
        </Container>
    );
};
  
export default Deck;