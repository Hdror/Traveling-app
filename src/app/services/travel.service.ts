import { Injectable } from '@angular/core';
import { Travel } from '../models/travel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TravelService {
  constructor() { }

  private _travelsDB: Travel[] = [
    { country: "usa", startDate: new Date(), endDate: new Date(), notes: '', flag: "https://flagcdn.com/w320/lu.png", }
  ]

  private _travels$ = new BehaviorSubject<Travel[]>([])
  travels$ = this._travels$.asObservable()

  query() {
    this._travels$.next(this._travelsDB)
  }


}
