import {ImageGallery} from './image-gallery';
import {TsLocationInfo} from './ts-location-info';

export interface Accomodation {
  Id: string;
  HgvId: string;
  Shortname: string;
  Units: number;
  Beds: number;
  HasApartment: boolean;
  HasRoom: boolean;
  IsBookable: boolean;
  SmgActive: boolean;
  TVMember: boolean;
  TourismVereinId: string;
  MainLanguage: string;
  FirstImport: string;
  LastChange: string;
  Gpstype: string;
  Latitude: number;
  Longitude: number;
  Altitude: number;
  AltitudeUnitofMeasure: string;
  AccoCategoryId: string;
  AccoTypeId: string;
  DistrictId: string;
  BoardIds: [
    string
    ];
  BadgeIds: [
    string
    ];
  ThemeIds: [
    string
    ];
  SpecialFeaturesIds: [
    string
    ];
  ImageGallery: ImageGallery[];
  LocationInfo: TsLocationInfo;
}
