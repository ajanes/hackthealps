import {ConnectionsModel} from './connections.model';

export interface TimetableModel {
  from: string;
  to: string;
  date: string;
  connections: ConnectionsModel[];
}


