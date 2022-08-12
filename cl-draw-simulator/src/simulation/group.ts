import { ClubType } from './types/interfaces';

class Group {
  name: string;
  clubs: ClubType[] = []; // Track the clubs that are placed in the group.
  available: boolean; // Whether the group is already occupied for a given draw round.

  constructor(name: string, available: boolean) {
    this.name = name;
    this.available = available;
  }

  public getName() {
    return this.name;
  }

  // Method to add a club to this group.
  public addClub(club: ClubType) {
    this.clubs.push(club);
  }

  // Method to get the clubs in the group.
  public getClubs() {
    return this.clubs;
  }

  // Method to get the availability status of the group.
  public getAvailability() {
    return this.available;
  }

  // Method to change the availability status of the group.
  public setAvailability(newValue: boolean) {
    this.available = newValue;
  }

  // Method that checks whether a club with a given country is already included in the group.
  public checkCommonCountries(club: ClubType): boolean {
    if (this.clubs.length === 0) {
      return false;
    }
    for (let i = 0; i < this.clubs.length; i++) {
      if (this.clubs[i].getCountry() === club.getCountry()) {
        return true;
      }
    }
    return false;
  }

  // Method that checks whether a club with a given pot is already included in the group.
  public checkCommonPots(club: ClubType): boolean {
    if (this.clubs.length === 0) {
      return false;
    }

    for (let i = 0; i < this.clubs.length; i++) {
      if (this.clubs[i].getPot() === club.getPot()) {
        return true;
      }
    }
    return false;
  }
}

export default Group;
