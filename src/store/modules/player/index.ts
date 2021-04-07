import { error, success } from '@redux-requests/core';
import { Action, Err, Player } from '../../types';

const initial: Player = {
    nickname: '',
    deviceId: '',
    score: 0,
    ranking: [], 
    oldRanking: [],
    currentScore: 0,
    localScore: 0,
    loading: false,
    deck: undefined, 
    error: undefined
};

function reducer (state = initial, action: Action): Player {
    switch (action.type) {
        case 'setNickname':
            const { nickname } = action.payload;
            return { ...state, nickname };
        
        case 'setDeviceId':
            const { deviceId } = action.payload;
            return { ...state, deviceId };

        case 'addScore':
            let { localScore } = state;
            localScore+= action.payload.score;
            return { ...state, localScore };

        case 'setCurrentScore':
            let { currentScore } = action.payload;
            return { ...state, currentScore };

        case 'setDeck':
            const { deck } = action.payload;
            return { ...state, deck};

        case 'clearRanking':
            return { ...state, oldRanking: []};
            
        case 'sendData':
            return {
                ...state, 
                loading: true, 
                error: undefined
            };
        case success('sendData'):
            const { ranking, score } = action.response.data;

            return {
                ...state,
                loading: false,
                localScore: 0,
                score,
                ranking,
                oldRanking: state.ranking
            };
        case error('sendData'):
            const { response } = action.error;
            const err: Err = response?.data || {
                code: 'somethingWrong',
                message: 'Algo deu errado! Não foi possível mostrar o Ranking.'
            };
            return {
                ...state, 
                loading: false,
                error: err
            };

        default:
            return state;
    };
};

export default reducer;