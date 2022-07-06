import { ClubType } from './types/interfaces';

class Group {
  name: string = ' ';
  clubs: ClubType[] = []; // Track the clubs that are placed in the group.

  constructor(name: string) {
    this.name = name;
  }

  // Method to add a club to this group.
  public addClub(club: ClubType) {
    this.clubs.push(club);
  }

  // Method that checks whether the country is already included in the group.
  public checkCommonCountries(country: string): boolean {
    for (let i = 0; i < this.clubs.length; i++) {
      if (this.clubs[i].getCountry() == country) {
        return true;
      }
    }
    return false;
  }
}

export default Group;
