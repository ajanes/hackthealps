import {WeeklyCompetitor} from './weekly-competitor';

export interface WeeklyView {

  id: number;
  money_saved: number[];
  co2: number[];

  competitors: WeeklyCompetitor[];
}
