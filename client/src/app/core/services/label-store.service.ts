import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Label} from '../model/label';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LabelStoreService {

  private _label: Label

  constructor() {
    this._label = {text: 'Green Alps'};
  }

  getLabel() {
    return this._label;
  }

  set label(label: string) {
    this._label.text = label;
  }
}
