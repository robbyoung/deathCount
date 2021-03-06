import { createSelector } from 'reselect';
import { getIncompleteDeath } from './deaths';
import { getSelectedGame, getIncompleteGame } from './games';
import { State } from '../state';

export const getAllOptionSets = (state: State) => state.optionSets;

export const getOptionSetsForSelectedGame = createSelector(
    [getAllOptionSets, getSelectedGame],
    (optionSets, game) => {
        return optionSets.filter(optionSet => optionSet.gameId === game.id);
    },
);

export const getOptionSetsForIncompleteGame = createSelector(
    [getAllOptionSets, getIncompleteGame],
    (optionSets, game) => {
        return optionSets.filter(optionSet => optionSet.gameId === game.id);
    },
);

export const getOptionSetForNewDeath = createSelector(
    [getIncompleteDeath, getOptionSetsForSelectedGame],
    (death, optionSets) => {
        return optionSets.find(
            options => death.details[options.title] === undefined,
        );
    },
);

export const getSelectedOptionSet = createSelector(
    [getOptionSetsForSelectedGame],
    optionSets => {
        return optionSets.find(optionSet => optionSet.selected);
    },
);
