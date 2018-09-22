import {Injectable} from '@angular/core';
import {TourismService} from './tourism.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  constructor(private tourismService: TourismService) {

  }


  bootstrap$(): Promise<boolean> {
    return this.tourismService.login().toPromise();
  }

}
