import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Input from '../components/Input';
import { clearOldRanking, sendPlayerData, setPlayerNickname } from '../store/modules/player/actions';
import { State } from '../store/types';
import { 
  Body,
  Container,
  Header,
  Subtitle,
  Title,
  TopRight
} from '../styles';
import Loader from '../components/Loader';
import Scoreboard from '../components/Scoreboard';
import { Image } from '../styles';
import { pushNavigation } from '../services/navigation';
import { useLocation } from 'react-router';
import Toast from '../components/Toast';

const PlayerPage: React.FC = () => {
  const { player } = useSelector((state: State) => state);
  const { pathname } = useLocation();

  useEffect(() => {
    if (player.nickname.length<3) pushNavigation('/player/nickname');
    else {
      sendPlayerData(player);
      pushNavigation('/player');
    }
  }, [player.nickname]);

  useEffect(() => {
    if (player.error) {
      if (player.error.code==='duplicatedNickname') setPlayerNickname('');
    }
  }, [player.error]);

  useEffect(() => {
    if (player.oldRanking.length) setTimeout(clearOldRanking, 800);
  }, [player.oldRanking]);

  return (
    <Container>
        <Header>
          <Title>{player.nickname || 'Jogador'}</Title>
          <Subtitle>{player.score+player.localScore} pontos</Subtitle>
        </Header>
        <Body>
          <TopRight>
            <Image onClick={() => pushNavigation('/player/nickname')} src='assets/images/edit.png' margin={1.5} size={36} grayScale />
          </TopRight>
          
          {player.loading && <Loader />}
          {!player.loading && ((pathname==='/player/nickname' && <Input 
              label='Apelido'
              placeholder='Escolha para ver o ranking'
              initialValue={player.nickname}
              onSave={(value: string) => setPlayerNickname(value)}/>) ||
              (!player.error && <Scoreboard players={player.oldRanking.length ? player.oldRanking : player.ranking} id={player.deviceId} />))
          } 
          {(!player.loading && player.error) && <Toast>{player.error.message}</Toast>}
        </Body>
    </Container>
  );
};

export default PlayerPage;
