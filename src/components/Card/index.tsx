import React from 'react';
import { Animated } from 'react-animated-css';
import { Container, Empty, Image } from './styles';

interface Props {
    image?: string;
    onClick: () => void;
};

const Card: React.FC<Props> = ({image, onClick}) => {
    return (<>
        {image && <Animated animationIn="flipInX" animationOut="flipOutX" animationInDuration={1000} animationOutDuration={400} isVisible={true}>
            <Container>
                <Image src={image} />
            </Container>
        </Animated>}
        {!image && <Animated animationIn="flipInX" animationOut="flipOutX" animationInDuration={1000} animationOutDuration={400} isVisible={true}>
            <Empty onClick={onClick} />
        </Animated>}
    </>);
};
  
export default Card;