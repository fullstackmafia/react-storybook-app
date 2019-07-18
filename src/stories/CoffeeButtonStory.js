import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { specs, describe, it } from 'storybook-addon-specifications';
import {mount} from "enzyme";
import expect from "expect";
import CoffeeButton from './CoffeeButton';

const stories = storiesOf('CoffeeButton', module)
stories
.add('Black', () => {
    const story =
    <CoffeeButton onMouseOver={action('click')}>
    <span role="img" aria-label="without-milk">
    🏿
    </span>
  </CoffeeButton>;
  specs(() => describe('Black', () => {
     it('Should have the following text: 🏿Please serve 1 cup of coffee', () => {
         let output = mount(story);
         expect(output.text()).toContain('🏿Please serve a cup of coffee');
     }); 
  }));
  return story;
})
.add('White', () => (
    <CoffeeButton onClick={action('click')}>
     <span role="img" aria-label="with-milk">
    🏼
    </span>
  </CoffeeButton>
));
