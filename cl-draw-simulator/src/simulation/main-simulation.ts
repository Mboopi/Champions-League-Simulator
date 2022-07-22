import Club from './club';
import Group from './group';
import { ClubType, DataType, GroupType } from './types/interfaces';
import { getRandomInt } from './../helper-functions/helper-functions';

/**
 * Method that returns true if a given club may be assigned to a given group, according to the drawing rules
 * and false otherwise.
 */
function isValidDraw(club: ClubType, group: GroupType): boolean {
  let isValid = true;
  // Clubs may not be from the same countries and pot.
  if (group.checkCommonCountries(club) || group.checkCommonPots(club)) {
    isValid = false;
  }

  // Group should availability status should be true.
  if (group.getAvailability() === false) {
    isValid = false;
  }

  return isValid;
}

/**
 * Function to check how many groups are currently available.
 */
function countAvailableGroups(groups: Array<GroupType>) {
  let count = 0;
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].getAvailability()) {
      count++;
    }
  }

  return count;
}

class Simulation {
  data: DataType[] = []; // Array of dataType objects, which is basically just the objects in the data array.
  groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  currentPot = 1; // Track from which pot clubs must be drawn.
  isDone = false; // Whether the simulation has been finished.

  clubsRemaining: ClubType[] = []; // Array of Club objects, that still have to be drawn.
  groups: GroupType[] = []; // Array of Group objects.
  // availableGroups: GroupType[] = []; // Array of available groups, which will reset every time 8 clubs have been drawn.

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
      const group = new Group(this.groupNames[i], true);
      this.groups.push(group);
    }
  }

  /**
   * Method that resets the simulation.
   */
  public resetSimulation() {
    this.clubsRemaining = [];
    this.groups = [];
    this.currentPot = 1;
    this.isDone = false;

    this.initializeSimulation();
  }

  /**
   * Method that runs 1 step of the simulation, that is, draws 1 club and assigns it to a group.
   * It then returns the group to which the club has been assigned.
   */
  public runSimulationStep() {
    let randomClubIndex = getRandomInt(0, this.clubsRemaining.length); // Draw a random club.
    let drawnClub = this.clubsRemaining[randomClubIndex];

    let randomGroupIndex = getRandomInt(0, this.groups.length); // Draw a random group.
    let drawnGroup = this.groups[randomGroupIndex];

    // Keep redrawing while the drawn club is not from the required pot.
    while (drawnClub.getPot() !== this.currentPot) {
      randomClubIndex = getRandomInt(0, this.clubsRemaining.length);
      drawnClub = this.clubsRemaining[randomClubIndex];
    }

    // Keep redrawing while the drawn group is not valid.
    while (isValidDraw(drawnClub, drawnGroup) === false) {
      randomGroupIndex = getRandomInt(0, this.groups.length);
      drawnGroup = this.groups[randomGroupIndex];

      // Need to add check in case it's impossible to place the club in an available group,
      // then should return something ...
    }

    // Add the club to the group.
    drawnGroup.addClub(drawnClub);
    console.log('Added', drawnClub.getName(), 'to', drawnGroup.getName());

    // Remove the club from the list of available clubs.
    this.clubsRemaining.splice(randomClubIndex, 1);

    // Set the availability status of the group to false.
    this.groups[randomGroupIndex].setAvailability(false);

    /**
     * After every 8 clubs have been assigned to the groups, all groups are unavailable.
     * Then 1 round has been finished and the next round of draws begins, so reset status.
     */
    if (countAvailableGroups(this.groups) < 1) {
      // Increase the currentPot counter.
      this.currentPot++;

      // Reset the availability status of all groups.
      for (let i = 0; i < this.groups.length; i++) {
        this.groups[i].setAvailability(true);
      }
    }

    // If all clubs have been drawn, then running the next step should just reset everything.
    if (this.clubsRemaining.length < 1) {
      //this.resetSimulation();
      this.isDone = true;
    }

    // Return the group array of Group objects.
    return this.groups;
  }
}

// Remove...
// const test = new Simulation(data_2022.group_stage);
// test.initializeSimulation();

export default Simulation;
