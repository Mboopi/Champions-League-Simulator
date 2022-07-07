// Define the types.

interface DataType {
  club_name: string;
  country: string;
  pot: number;
}

interface ClubType {
  name: string;
  country: string;
  pot: number;
  getName(): string;
  getCountry(): string;
  getPot(): number;
}

interface GroupType {
  name: string;
  clubs: ClubType[];
  available: boolean;
  getName(): string;
  getAvailability(): boolean;
  setAvailability(newValue: boolean): void;
  addClub(club: ClubType): void;
  checkCommonCountries(club: ClubType): boolean;
  checkCommonPots(club: ClubType): boolean;
}

export type { DataType, ClubType, GroupType };
