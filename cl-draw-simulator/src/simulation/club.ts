class Club {
  name: string;
  country: string;
  pot: number;

  constructor(name: string, country: string, pot: number) {
    this.name = name;
    this.country = country;
    this.pot = pot;
  }

  public getName() {
    return this.name;
  }

  public getCountry() {
    return this.country;
  }

  public getPot() {
    return this.pot;
  }
}

export default Club;
