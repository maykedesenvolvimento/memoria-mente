import { store } from '../../';
import { Deck, Player } from '../../types';

export function setPlayerNickname(nickname: string) {
    store.dispatch({
        type: 'setNickname',
        payload: { nickname }
    });
};

export function setPlayerDeviceId(deviceId: string) {
    store.dispatch({
        type: 'setDeviceId',
        payload: { deviceId }
    });
};

export function addPlayerScore(score: number) {
    store.dispatch({
        type: 'addScore',
        payload: { score }
    });
};

export function setPlayerScore(currentScore: number) {
    store.dispatch({
        type: 'setCurrentScore',
        payload: { currentScore }
    });
};

export function setPlayerDeck(deck: Deck) {
    store.dispatch({
        type: 'setDeck',
        payload: { deck }
    });
};

export function sendPlayerData(player: Player) {
    const {nickname, deviceId, localScore} = player;
    const data = {nickname, deviceId, localScore};
    
    store.dispatch({
        type: 'sendData',
        request: {
            url: 'memory/player',
            method: 'POST',
            data
        }
    });
};

export function clearOldRanking() {
    store.dispatch({
        type: 'clearRanking'
    });
};