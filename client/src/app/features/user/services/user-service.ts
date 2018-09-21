import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WeeklyView} from '../model/weekly-view';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getWeeklyView$(): Observable<WeeklyView> {
    return this.http.get<WeeklyView>('http://172.31.202.134:4567/fingerprint/person/weekly/1');
  }


}
