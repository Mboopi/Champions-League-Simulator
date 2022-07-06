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
  addClub(club: ClubType): void;
  checkCommonCountries(country: string): boolean;
}

export type { DataType, ClubType, GroupType };
