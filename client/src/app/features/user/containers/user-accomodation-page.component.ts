import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../../core/services/user-profile.service';
import {TourismService} from '../../../core/services/tourism.service';
import {Observable} from 'rxjs';
import {Accomodation} from '../../../core/model/accomodation';
import {map, tap} from 'rxjs/operators';
import {CompetitorInfo} from '../model/competitor-info';
import {LabelStoreService} from '../../../core/services/label-store.service';

@Component({
  selector: 'ga-user-accomodation-page',
  template: `
    <ga-competitor-view [accomodation]="accomodation$ | async" [competitors]="competitors$ | async"></ga-competitor-view>
  `,
  styles: []
})
export class UserAccomodationPageComponent implements OnInit {

  accomodation$: Observable<Accomodation>;
  competitors$: Observable<CompetitorInfo[]>;

  constructor(private userProfileService: UserProfileService,
              private labelStoreService: LabelStoreService,
              private tourismService: TourismService) { }

  ngOnInit() {
    this.labelStoreService.label = 'CO2 Accomodation performance';
    const profile = this.userProfileService.getUserProfile();
    this.accomodation$ = this.tourismService.readHotel$(profile.accomodationId)
      .pipe(
        tap(accomodation => {
          this.competitors$ = this.tourismService.getHotelsForTvs$(accomodation.LocationInfo.TvInfo.Id)
            .pipe(
              map(accomodations => {
                return accomodations.Items.map(acc => {
                  const comp: CompetitorInfo = {
                    id: acc.Id,
                    longitude: acc.Longitude,
                    latitude: acc.Latitude,
                    name: acc.Shortname,
                    co2: 120,
                    isBetter: Math.random() > 0.5 ? true : false
                  };
                  return comp;
                });
              })
            );
        })
      );
  }

}
