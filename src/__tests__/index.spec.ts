import { helloTo } from '../index';

it('says hello to you', () => {
  expect(helloTo('Ramil')).toEqual('Hello Ramil');
  expect(helloTo('Julie')).toEqual('Hello Julie');
  expect(helloTo()).toEqual('Hello world');
});