export class Person {
  constructor(earthAge, earthExpectancy){
    this.earthAge = earthAge;
    this.earthExpectancy = earthExpectancy;
    this.planetAges=[];
    this.yearsLeft=[];
    this.yearsOver=[];
  }

  getPlanets(){
  }  
  // ageCalc() {
  //   const planets = {
  //     name: ["Mercury", "Venus", "Mars", "Jupiter"],
  //     yearLength: [.24, .62, 1.88, 11.86]
  //   }
  //   for (let i = 0; i<planets.yearLength.length; i++){
  //     let planetAge = Math.round(this.earthAge/planets.yearLength[i]);
  //     let planetExpectancy = Math.round(this.earthExpectancy/planets.yearLength[i]);
  //     let planetYearsLeft = Math.round(planetExpectancy-planetAge);
  //     this.planetAges.push(planetAge);
  //     if(this.earthAge<=this.earthExpectancy){
  //       this.yearsLeft.push(planetYearsLeft);
  //     } else{
  //       this.yearsOver.push(Math.abs(planetYearsLeft));
  //     }
  //   }
 // }
}
