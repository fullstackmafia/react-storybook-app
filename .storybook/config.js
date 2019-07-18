import { configure as configure1 } from '@storybook/react';
import {configure as configure2} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function loadStories() {
  require('../src/stories');
}

configure1(loadStories, module);
configure2({ adapter: new Adapter() });