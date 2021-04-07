// REDUX TYPES:
export type Action = {
    type: string;
    payload?: any;
    request?: any;
    response?: any;
    error?: any;
};

export type Err = {
    message: string;
    code: string;
};

// OBJECT TYPES:
export type Deck = {
    slug: string;
    name: string;
    dificulty: string;
    score: number;
    cards: Array<Card>;
};

export type Card = {
    slug: string;
    hidden?: boolean;
};

// MODULE TYPES:
export type Player = {
    // Online data:
    nickname: string;
    deviceId: string;
    score: number;
    oldRanking: Array<Player>;
    ranking: Array<Player>;
    // Offline data:
    currentScore: number;
    localScore: number;
    loading: boolean;
    deck?: Deck;
    error?: Err;
};

// ROOT TYPE:
export type State = {
    decks: Array<Deck>;
    player: Player;
};