import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { 
  Container,
  Header,
  Body,
  Title,
  Subtitle,
  Grid
} from '../styles';
import Deck from '../components/Deck';
import { pushNavigation } from '../services/navigation';
import { getImg, getRandom } from '../services/utils';
import { setPlayerDeck } from '../store/modules/player/actions';
import { State } from '../store/types';

const HomePage: React.FC = () => {
  const {decks} = useSelector((state: State) => state);
  const colors = [4, 3, 2, 1];

  return (
      <Container>
        <Header>
          <Title>Memória Mente</Title>
          <Subtitle>Escolha um tema para jogar</Subtitle>
        </Header>
        <Body>
          <Grid cols={2} gap={4}>
            {decks.map((deck, index) => <Deck
              key={deck.slug}
              title={deck.name}
              subtitle={deck.dificulty}
              colorTone={colors[index]}
              image={getImg(deck.slug, deck.cards[getRandom(deck.cards.length)].slug)}
              onClick={() => {
                setPlayerDeck(deck);
                pushNavigation('/game');
              }} />
            )}
          </Grid>
        </Body>
      </Container>
  );
};

export default HomePage;
