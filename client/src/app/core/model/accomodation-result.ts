import {Accomodation} from './accomodation';

export interface AccomodationResult {
  TotalResults: number;
  TotalPages: number;
  CurrentPage: number;
  OnlineResults: number;
  Seed: number;
  Items: Accomodation;
}
