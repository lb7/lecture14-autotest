import React from 'react';
import {shallow} from 'enzyme';
import {DogList} from './PetApp';


//tests go here!
describe('Basic math and logic', () => {
    it('should confirm that 1+1=2', () => {
        expect(1+1).toEqual(2);
    });

    it('should not contain my name', () => {
        expect(['Joel', 'Luis', 'Cameron']).not.toContain('Luke');
    })
});

describe('<App> component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<DogList />);
    })
});

