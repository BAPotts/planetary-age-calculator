export class Person {
  constructor(earthAge, earthExpectancy){
    this.earthAge = earthAge;
    this.earthExpectancy = earthExpectancy;
    this.planetAges=[];
  }

  ageCalc() {
    const planets = {
      name: ["Mercury", "Venus", "Mars", "Jupiter"],
      yearLength: [.24, .62, 1.88, 11.86]
    }
    for (let i = 0; i<planets.yearLength.length; i++){
      this.planetAges.push(Math.round(this.earthAge/planets.yearLength[i]));
    }

  }
}
