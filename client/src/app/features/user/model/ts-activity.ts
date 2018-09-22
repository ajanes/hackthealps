import {TsActivityDetailLocalized} from './ts-activity-detail-localized';
import {TsGpsTrack} from './ts-gps-track';
import {TsImage} from '../../../core/model/ts-image';

export interface TsActivity {
  Id: string;
  Type: string;
  Shortname: string;
  Detail: TsActivityDetailLocalized;
  GpsTrack: TsGpsTrack;
  ImageGallery: TsImage[]
}
