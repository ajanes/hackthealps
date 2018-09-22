import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TsLogin} from '../model/ts-login';
import {AccomodationResult} from '../model/accomodation-result';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Accomodation} from '../model/accomodation';
import {SuggestionSetting} from '../../features/user/model/suggestion-setting';
import {TsActivity} from '../../features/user/model/ts-activity';
import {TsActivityResult} from '../../features/user/model/ts-activity-result';

@Injectable({
  providedIn: 'root'
})
export class TourismService {

  private apiKey: string;

  constructor(private http: HttpClient) {

  }

  login(): Observable<boolean> {
    const body = {
      username: 'tourism@hackthealps.it',
      pswd: '$h4cKth34lpS'
    };
    return this.http.post<TsLogin>('http://tourism.opendatahub.bz.it/api/LoginApi', body)
      .pipe(
        map(login => {
          this.apiKey = login.access_token;
          return true;

        })
      );
  }

  readHotel$(id: string): Observable<Accomodation> {
    const url = 'http://tourism.opendatahub.bz.it/api/AccommodationLocalized';
    const params = {
      idfilter: id
    };
    const headers = {
      Authorization: 'Bearer ' + this.apiKey
    };
    return this.http.get<AccomodationResult>(url, {params: params, headers: headers})
      .pipe(
        map(value => value.Items[0])
      );
  }


  getHotelsForTvs$(tvsId: string): Observable<AccomodationResult> {
    const url = 'http://tourism.opendatahub.bz.it/api/AccommodationLocalized';
    const params = {
      language: 'en',
      categoryfilter: '16384',
      typefilter: '1',
      locfilter: 'tvs' + tvsId
    };
    const headers = {
      Authorization: 'Bearer ' + this.apiKey
    };
    return this.http.get<AccomodationResult>(url, {params: params, headers: headers});
  }

  findActivities(setting: SuggestionSetting, regionId: string): Observable<TsActivity[]> {
    const url = 'http://tourism.opendatahub.bz.it/api/Activity';
    const params = {
      activitytype: String(setting.activityType),
      difficultyfilter: String(setting.difficulty),
      distancefilter: '0,' + setting.maxDistance,
      locfilter: 'reg' + regionId
    };
    const headers = {
      Authorization: 'Bearer ' + this.apiKey
    };
    return this.http.get<TsActivityResult>(url, {params: params, headers: headers})
      .pipe(
        map(value => {
          console.log('length:' + value.Items.length);
          return value.Items;
        })
      );

  }

}
