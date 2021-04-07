import React, { useEffect, useState } from 'react';
import Clock from '../components/Clock';
import { 
    Container,
    Header,
    Body,
    Title,
    Subtitle,
    Grid,
    TopRight
} from '../styles';
import { Card, State } from '../store/types';
import { useSelector } from 'react-redux';
import { getImg, getRandom } from '../services/utils';
import shuffle from 'array-shuffle';
import CardComponent from '../components/Card';
import { Animated } from 'react-animated-css';
import Deck from '../components/Deck';
import { addPlayerScore, setPlayerScore } from '../store/modules/player/actions';
import { pushNavigation } from '../services/navigation';
import { useLocation } from 'react-router';

const GamePage: React.FC = () => {
    const {player: {deck, currentScore}} = useSelector((state: State) => state);
    const ANIMATION_TIME = 800;
    const {pathname} = useLocation();

    // Estado do jogo:
    const [cards, setCards] = useState<Card[]>([]);
    const [currentCard, setCurrentCard] = useState(-1);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [block, setBlock] = useState(false);

    const startGame = (win?: boolean) => {
        if (deck) {
            let newLevel = level;

            if (win) {
                setTime(0);

                const points = deck?.score*level*cards.length;
                setPlayerScore((currentScore || 0)+points);
                addPlayerScore(points);

                if (level<6) {
                    newLevel = level+1;
                    setLevel(newLevel);
                }
            }

            const nums: Array<number> = [];
            const array: Array<Card> = [];
    
            while (nums.length<newLevel*3) {
                const num = getRandom(deck.cards.length);
                if (!nums.includes(num)) {
                    array.push(deck.cards[num]);
                    nums.push(num);
                }
            };

            const allCards = shuffle([...array, ...array]);
            setCards(allCards);

            setCurrentCard(-1);
            setScore(0);
            
            setTimeout(() => {
                setBlock(false);
                setTime(newLevel*15);
            }, 200);
            
            setCards(allCards.map(c => {
                return {...c, hidden: true}
            }));
        }
    };

    const showCard = (pos: number) => {
        if (block) return;
        setCards(cards.map((card, index) => (pos!==index) ? card : {...card, hidden: false}));

        if (currentCard==-1) setCurrentCard(pos);
        else {
            if (cards[pos].slug === cards[currentCard].slug) {
                const newScore = score+2;
                
                if (newScore=== cards.length) {
                    setBlock(true);
                    setTimeout(() => startGame(true), ANIMATION_TIME);
                }
                else {
                    
                    setScore(newScore);
                }
            }
            else {
                setBlock(true);
                setTimeout(() => {
                    setCards(cards.map(card => (card.slug !== cards[currentCard].slug) ? card : {...card, hidden: true}));
                    setBlock(false);
                }, ANIMATION_TIME);
            };
            setCurrentCard(-1);
        };
    };

    useEffect(() => {
        setPlayerScore(0);
        startGame();
    }, []);

    useEffect(() => {
        if (pathname!=='/game') setGameOver(true);
    }, [pathname]);

    return (
        <Container>
            <Header>
            <Title>{deck?.name}</Title>
            <Subtitle>Nível {level}</Subtitle>
            {time>0 && <TopRight>
                <Animated animationIn="pulse" animationOut="bounceOutDown" animationInDuration={ANIMATION_TIME} animationOutDuration={ANIMATION_TIME} isVisible={!gameOver}>
                    <Clock seconds={time} paused={block} onFinish={() => pushNavigation('/game/over')} />
                </Animated>
            </TopRight>}
            </Header>
            <Body>
                {gameOver && <Animated animationIn="bounceInDown" animationOut="bounceOutDown" animationInDuration={ANIMATION_TIME} animationOutDuration={ANIMATION_TIME} isVisible={true}>
                    <Grid cols={1} gap={16}>
                        <Deck 
                            title={pathname==='/game/exit' ? 'Você desistiu!' : 'Tempo esgotado!'} 
                            subtitle={`${currentScore} pontos obtidos.`} 
                            image='assets/images/game-over.png' 
                            colorTone={1}
                            onClick={() => null}
                        />
                    </Grid>
                </Animated>}
                <Animated animationIn="bounceInDown" animationOut="bounceOutDown" animationInDuration={ANIMATION_TIME} animationOutDuration={ANIMATION_TIME} isVisible={!gameOver}>
                    <Grid cols={6} gap={2}>
                        {cards.map((card, index) => <CardComponent onClick={() => showCard(index)} key={index} image={card.hidden ? undefined : getImg(deck?.slug || '', card.slug)} />)}
                    </Grid>
                </Animated>
            </Body>
        </Container>
    );
};

export default GamePage;
