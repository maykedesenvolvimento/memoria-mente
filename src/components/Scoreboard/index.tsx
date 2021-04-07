import React from 'react';
import { Container, Row, Col } from './styles';
import { Player } from '../../store/types';
import { Animated } from 'react-animated-css';

interface Props {
    players: Array<Player>;
    id: string;
};

const Scoreboard: React.FC<Props> = ({players, id}) => {
    return (
        <Container>
            {players.map((p, index) => 
            <Animated key={p.deviceId} animationIn="fadeInLeft" animationOut="fadeInRight" animationInDuration={400} animationOutDuration={600} isVisible={p.deviceId=== id}>
                <Row contrast={p.deviceId=== id}>
                    <Col size={1}>{index+1}º</Col>
                    <Col size={3}>{p.nickname}</Col>
                    <Col size={2}>{p.score} pontos</Col>
                </Row>
            </Animated>)}
        </Container>
    );
};
  
export default Scoreboard;