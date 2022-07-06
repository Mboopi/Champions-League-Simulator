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
  availableGroups: GroupType[] = []; // Array of available groups, which will reset every time 8 clubs have been drawn.

  constructor(data: Array<DataType>) {
    this.data = data;
    this.initializeSimulation();
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

    for (let i = 0; i < this.groupNames.length; i++) {
      const group = new Group(this.groupNames[i]);
      this.groups.push(group);
      this.availableGroups.push(group);
    }
  }

  /**
   * Method that returns true if a given club may be assigned to a given group, according to the drawing rules
   * and false otherwise.
   */
  public isValidDraw(club: ClubType, group: GroupType): boolean {
    let isValid = true;
    // Clubs may not be from the same countries.
    if (group.checkCommonCountries(club)) {
      isValid = false;
    }

    // Clubs may not be from the same pot.
    // Iterate over availableGroups since only the groups in availableGroups will be tried.
    for (let i = 0; i < this.availableGroups.length; i++) {
      if (group.checkCommonPots(club)) {
        isValid = false;
      }
    }
    return isValid;
  }

  /**
   * Method that runs 1 step of the simulation, that is, draws 1 club and assigns it to a group.
   * It then returns the group to which the club has been assigned.
   */
  public runSimulationStep() {
    let randomClubIndex = getRandomInt(0, this.clubsRemaining.length); // Draw a random club.
    let drawnClub = this.clubsRemaining[randomClubIndex];

    let randomGroupIndex = getRandomInt(0, this.groups.length); // Draw a random group.
    let drawnGroup = this.availableGroups[randomGroupIndex];

    // Keep redrawing while the drawn club is not from the required pot.
    while (drawnClub.getPot() !== this.currentPot) {
      randomClubIndex = getRandomInt(0, this.clubsRemaining.length);
      drawnClub = this.clubsRemaining[randomClubIndex];
    }

    // Keep redrawing while the drawn group is not valid.
    while (this.isValidDraw(drawnClub, drawnGroup) === false) {
      randomGroupIndex = getRandomInt(0, this.groups.length);
      drawnGroup = this.availableGroups[randomGroupIndex];

      // Need to add check in case it's impossible to place the club in an available group,
      // then should return something ...
    }

    // Add the club to the group.
    drawnGroup.addClub(drawnClub);
    console.log(
      'Added ',
      drawnClub.getName(),
      'to group ',
      drawnGroup.getName()
    );

    // Remove the club and the group from the list of available clubs and groups, respectively.
    this.clubsRemaining.splice(randomClubIndex);
    this.availableGroups.splice(randomGroupIndex);

    /**
     * After every 8 clubs have been assigned to the groups, the list of availabe groups has no groups left.
     * Then 1 round has been finished and the next round of draws begins.
     */
    if (this.availableGroups.length === 0) {
      // Increase the currentPot counter.
      this.currentPot++;

      // Reset the list of available groups
      this.availableGroups = this.groups;
    }

    // Return the group array of Group objects.
    return this.groups;
  }
}

// Remove...
// const test = new Simulation(data_2022.group_stage);
// test.initializeSimulation();

export default Simulation;
