import * as data_2022 from '../data/data-2022.json'; // Remove...
import Club from './club';
import Group from './group';
import { ClubType, DataType, GroupType } from './types/interfaces';

/**
 * Function that returns a random integer between min and max.
 */
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is. inclusive
}

class Simulation {
  data: DataType[] = []; // Array of dataType objects, which is basically just the objects in the data array.
  groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  currentPot = 1; // Track from which pot, clubs must be drawn.

  clubsRemaining: ClubType[] = []; // Array of Club objects, that still have to be drawn.
  groups: GroupType[] = []; // Array of Group objects.

  constructor(data: Array<DataType>) {
    this.data = data;
  }

  /**
   * Method that initializes the simulation by loading the JSON data into an array of Club objects
   * and by initializing the groups.
   */
  public initializeSimulation() {
    for (let i = 0; i < this.data.length; i++) {
      const clubInfo = this.data[i];
      const club = new Club(clubInfo.club_name, clubInfo.country, clubInfo.pot);

      this.clubsRemaining.push(club);
    }

    for (const groupName in this.groupNames) {
      const group = new Group(groupName);
      this.groups.push(group);
    }
  }

  /**
   * Method that returns true if a given club may be assigned to a given group, according to the drawing rules
   * and false otherwise.
   */
  public isValidDraw(club: ClubType, group: GroupType): boolean {
    let isValid = true;
    if (group.checkCommonCountries(club.getCountry())) {
      isValid = false;
    }

    return true;
  }

  /**
   * Method that runs 1 step of the simulation, that is, draws 1 club and assigns it to a group.
   * It then returns the group to which the club has been assigned.
   */
  public runSimulationStep() {
    let randomClubIndex = getRandomInt(0, this.clubsRemaining.length); // Draw a random club.
    const randomGroupIndex = getRandomInt(0, this.groups.length); // Draw a random group.

    // The drawn club must be from the required pot.
    while (this.clubsRemaining[randomClubIndex].getPot() != this.currentPot) {
      randomClubIndex = getRandomInt(0, this.clubsRemaining.length);
    }

    if (
      // If the draw is valid, then add the club to the group.
      this.isValidDraw(
        this.clubsRemaining[randomClubIndex],
        this.groups[randomGroupIndex]
      )

      // Increase currentPot counter after every 8 clubs have been drawn.
    ) {
      return;
    } else {
      // Else discard and draw again.
      return;
    }
  }

  /**
   * Method that returns the group array of Group objects.
   */
  public getGroups() {
    return this.groups;
  }
}

// Remove...
const test = new Simulation(data_2022.group_stage);
test.initializeSimulation();

export default Simulation;
