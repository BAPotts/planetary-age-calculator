import { Person } from '../src/person.js';

describe('Person', () => {

  // test('Should take and store an age', () =>
  // {
  //   let beverly = new Person(32);
  //   expect(beverly.earthAge).toEqual(32);
  // })
  // test('Should take earthAge and calculate age in Mercury years', ()=>
  // {
  //   let beverly = new Person(32);
  //   beverly.ageCalc();
  //   expect(beverly.planetAges[0]).toEqual(133);
  // })
  // test('Should take an earthAge and calculate age in Venus years', ()=>
  // {
  //   let beverly = new Person(32);
  //   beverly.ageCalc();
  //   expect(beverly.planetAges[1]).toEqual(52);
  // })
  // test('Should take an earthAge and calculate age in Mars years', ()=>
  // {
  //   let beverly = new Person(32);
  //   beverly.ageCalc();
  //   expect(beverly.planetAges[2]).toEqual(17);
  // })
  // test('Should take an earthAge and calculate age in Jupiter years', ()=>
  // {
  //   let beverly = new Person(32);
  //   beverly.ageCalc();
  //   expect(beverly.planetAges[3]).toEqual(3);
  // })
  // test('Should take in the Earth life expectancy of user', ()=>
  // {
  //   let beverly = new Person(32, 79);
  //   expect(beverly.earthExpectancy).toEqual(79);
  // })
  // test('Should convert earthExpectancy to life expectancy of other planets and calculate years left to live on each', ()=>
  // {
  //   let beverly = new Person(32,79);
  //   beverly.ageCalc();
  //   expect(beverly.yearsLeft).toEqual([196, 75, 25, 4]);
  // })
  // test('Should give years lived over life expectancy on planet if age is greater than life expectancy', ()=>
  // {
  //   let george = new Person(82, 79);
  //   george.ageCalc();
  //   expect(george.yearsOver).toEqual([13, 5, 2, 0]);
  // })
    test('Should calculate age of user on other plants and store in user object property', ()=>
    {
      let beverly = new Person(32,79);
      beverly.getPlanetAges();
      expect(beverly.planetAges).toEqual([133,52,17,3]);
    })
})