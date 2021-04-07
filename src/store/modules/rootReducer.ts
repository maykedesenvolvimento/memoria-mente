import { combineReducers } from "redux";
import decks from './decks';
import player from './player';

export default combineReducers({decks, player});