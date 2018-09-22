import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TsLogin} from '../model/ts-login';
import {AccomodationResult} from '../model/accomodation-result';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Accomodation} from '../model/accomodation';

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


  getHotels$(): Observable<AccomodationResult> {
    const url = 'http://tourism.opendatahub.bz.it/api/AccommodationLocalized';
    const params = {
      language: 'en',
      categoryfilter: '16384',
      typefilter: '1',
      locfilter: 'tvs5228229851CA11D18F1400A02427D15E'
    };
    const headers = {
      Authorization: 'Bearer ' + this.apiKey
    };
    return this.http.get<AccomodationResult>(url, {params: params, headers: headers});
  }

}
