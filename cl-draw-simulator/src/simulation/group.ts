import { ClubType } from './types/interfaces';

class Group {
  name: string;
  clubs: ClubType[] = []; // Track the clubs that are placed in the group.

  constructor(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }

  // Method to add a club to this group.
  public addClub(club: ClubType) {
    this.clubs.push(club);
  }

  // Method that checks whether a club with a given country is already included in the group.
  public checkCommonCountries(club: ClubType): boolean {
    for (let i = 0; i < this.clubs.length; i++) {
      if (this.clubs[i].getCountry() == club.getCountry()) {
        return true;
      }
    }
    return false;
  }

  // Method that checks whether a club with a given pot is already included in the group.
  public checkCommonPots(club: ClubType): boolean {
    for (let i = 0; i < this.clubs.length; i++) {
      if (this.clubs[i].getPot() == club.getPot()) {
        return true;
      }
    }
    return false;
  }
}

export default Group;
