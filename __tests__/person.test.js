import { Person } from '../src/person.js';

describe('Person', () => {

  test('Should take and store an age', () =>
  {
    let beverly = new Person(32);
    expect(beverly.earthAge).toEqual(32);
  })
  test('Should take earthAge and calculate age in Mercury years', ()=>
  {
    let beverly = new Person(32);
    expect(beverly.planetAges[0]).toEqual(133);
  })
})