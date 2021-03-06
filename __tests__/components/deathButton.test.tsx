import React from 'react';
import renderer from 'react-test-renderer';
import DeathButton from '../../app/components/deathButton';

describe('Death Button Component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<DeathButton
            onPress={() => undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});