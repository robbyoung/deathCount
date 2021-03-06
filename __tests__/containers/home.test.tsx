import React from 'react';
import renderer from 'react-test-renderer';
import SplashScreen from 'react-native-splash-screen';
import Home from '../../app/containers/home';
import store from '../../app/store';
import { loadStateAction } from '../../app/actions';
import { createTestState } from '../../app/state';

jest.mock('@react-native-community/async-storage', () => ({}));
jest.mock('react-native-splash-screen', () => ({
    hide: jest.fn(),
}));

describe('Home Container', () => {
    it('Renders with game and playthrough in the state', () => {
        const state = createTestState(1, 1, 0, 0, 0);
        const action = loadStateAction(state);
        store.dispatch(action);
        
        const component = renderer.create(<Home navigation={{} as any} />);
        expect(component.toJSON()).toMatchSnapshot();
        expect(SplashScreen.hide).toHaveBeenCalledTimes(1);
    });
});
