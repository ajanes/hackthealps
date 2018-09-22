export interface TimetableModel {
  from: string;
  to: string;
  date: string;
  connections: [
    {
      start: string;
      end: string;
      duration: string;
      transfers: number;
      money_saved: number;
      co2_saved: number;
      transportation_means: string[];
      color: string;
    }];
}
