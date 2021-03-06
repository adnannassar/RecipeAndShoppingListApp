export class Ingredient{

  /* Normal way to write the constructor
  public name : string;
  public amount : number;

  constructor(name : string , amount : number ) {
    this.name = name;
    this.amount = amount;
  }
   */

  // shortcut way to write the constructor :
  constructor(public name : string ,public amount : number ) {
    this.name = name;
    this.amount = amount;
  }
}
