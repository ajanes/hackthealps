import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WeeklyView} from '../model/weekly-view';
import {HttpClient} from '@angular/common/http';
import {TimetableModel} from '../model/timetable-model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getWeeklyView$(): Observable<WeeklyView> {
    return this.http.get<WeeklyView>('http://localhost:3000/weekly/123');
    //return this.http.get<WeeklyView>('http://172.31.202.134:4567/fingerprint/person/weekly/1');
  }

  getDailyView$(): Observable<any> {
    return this.http.get('http://localhost:3000/daily');
  }


  getTimetable() {
    return this.http.get<TimetableModel>('http://localhost:3000/timetable');
  }

  getStations() {
    return this.http.get<any>('http://localhost:3000/stations');
  }
}
