import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {TsLogin} from "../model/ts-login";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: "root"
})
export class TimetableService {

  constructor(private http: HttpClient) {
  }

  getTimetable(url: string): Observable<any> {
    return this.http.get(url).pipe(catchError(e => {
      return of();
    }));
  }
}
