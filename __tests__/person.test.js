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
    beverly.ageCalc();
    expect(beverly.planetAges[0]).toEqual(133);
  })
  test('Should take an earthAge and calculate age in Venus years', ()=>
  {
    let beverly = new Person(32);
    beverly.ageCalc();
    expect(beverly.planetAges[1]).toEqual(52);
  })
})