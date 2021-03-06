import { createSelector } from 'reselect';
import { State } from '../state';
import { getSelectedGame } from './games';

export const getAllPlaythroughs = (state: State) =>
    state.playthroughs.filter(playthrough => playthrough.complete);

export const getIncompletePlaythrough = (state: State) =>
    state.playthroughs.find(playthrough => !playthrough.complete);

export const getPlaythroughsForCurrentGame = createSelector(
    [getAllPlaythroughs, getSelectedGame],
    (playthroughs, selectedGame) => {
        return playthroughs.filter(
            playthrough => playthrough.gameId === selectedGame.id,
        );
    },
);

export const getSelectedPlaythrough = createSelector(
    [getPlaythroughsForCurrentGame],
    playthroughs => {
        return playthroughs.find(playthrough => playthrough.selected);
    },
);
