import Club from './club';
import Group from './group';
import { ClubType, DataType, GroupType } from './types/interfaces';
import { getRandomInt } from './../helper-functions/helper-functions';

/**
 * Method that returns true if a given club may be assigned to a given group, according to the drawing rules
 * and false otherwise.
 * Rules:
 *  -> Clubs from the same group and/or pot may not be drawn into the same group.
 *  -> Clubs from Ukraine and Russa may not be drawn into the same group.
 *  -> For clubs of the same association, pairings are made such that the clubs from said pairings will play on different days.
 *     As these pairing are not yet known, the simulator does not take these pairings into account.
 */
function isValidDraw(club: ClubType, group: GroupType): boolean {
  let isValid = true;
  // Clubs may not be from the same countries and pot.
  if (group.checkCommonCountries(club) || group.checkCommonPots(club)) {
    isValid = false;
  }

  // Group availability status should be true.
  if (group.getAvailability() === false) {
    isValid = false;
  }

  return isValid;
}

/**
 * Function to check how many groups are currently available (i.e. still open, but not necessarily valid).
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

/**
 * Function that returns the groups that the given club may still be assigned to according to the rules.
 */
function getValidGroups(club: ClubType, groups: Array<GroupType>) {
  let validGroups = [];
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].getAvailability() && isValidDraw(club, groups[i])) {
      validGroups.push(groups[i]);
    }
  }

  return validGroups;
}

class Simulation {
  data: DataType[] = []; // Array of dataType objects, which is basically just the objects in the data array.
  groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  currentPot = 1; // Track from which pot clubs must be drawn.
  isDone = false; // Whether the simulation has been finished.

  clubsRemaining: ClubType[] = []; // Array of Club objects, that still have to be drawn.
  groups: GroupType[] = []; // Array of Group objects.

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

    let randomGroupIndex, drawnGroup;

    // Keep redrawing while the drawn club is not from the required pot.
    while (drawnClub.getPot() !== this.currentPot) {
      randomClubIndex = getRandomInt(0, this.clubsRemaining.length);
      drawnClub = this.clubsRemaining[randomClubIndex];
    }

    // Draw a random valid group.
    const validGroupsRemaining = getValidGroups(drawnClub, this.groups);

    if (validGroupsRemaining.length > 0) {
      randomGroupIndex = getRandomInt(0, validGroupsRemaining.length);
      drawnGroup = validGroupsRemaining[randomGroupIndex];

      // Set the availability status of the group to false.
      drawnGroup.setAvailability(false);

      // Add the club to the group.
      drawnGroup.addClub(drawnClub);

      // Remove the club from the list of available clubs.
      this.clubsRemaining.splice(randomClubIndex, 1);
    } else {
      // Not sure what officiially happens in this case. For now, just restart the draw.
      console.log('No valid groups left!');
      this.resetSimulation();
    }

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

  /**
   * Function that immediately performs the whole draw procedure and returns the results.
   */
  public quickSimulation() {
    while (this.clubsRemaining.length > 0) {
      this.runSimulationStep();
    }

    return this.groups;
  }
}

export default Simulation;
