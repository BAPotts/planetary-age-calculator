import { Person } from '../src/person.js';

describe('Person', () => {

  test('Should take and store an age', () =>
  {
    beverly = new Person(32);
    expect(beverly.earthAge).toEqual(32);
  })
})