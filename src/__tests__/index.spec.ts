import { expect } from '@esm-bundle/chai';
import { helloTo } from '../index';

it('says hello to you', () => {
  expect(helloTo('Ramil')).to.equal('Hello Ramil');
  expect(helloTo('Julie')).to.equal('Hello Julie');
  expect(helloTo()).to.equal('Hello World');
});
