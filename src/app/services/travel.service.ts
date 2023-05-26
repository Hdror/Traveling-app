import { Injectable } from '@angular/core';
import { Travel } from '../models/travel';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AutoCompleteResponse } from '../models/auto-complete-response';

@Injectable({
  providedIn: 'root'
})

export class TravelService {
  constructor(private http: HttpClient) { }

  private _travelsDB: Travel[] = [
    { country: "usa", startDate: new Date(), endDate: new Date(), notes: '', flag: "https://flagcdn.com/w320/lu.png", },
    { country: "italy", startDate: new Date(), endDate: new Date(), notes: '', flag: "https://flagcdn.com/w320/lu.png", },
    { country: "uk", startDate: new Date(), endDate: new Date(), notes: '', flag: "https://flagcdn.com/w320/lu.png", }
  ]

  private _travels$ = new BehaviorSubject<Travel[]>([])
  travels$ = this._travels$.asObservable()
  private _url = "https://restcountries.com/v3.1/"

  query() {
    this._travels$.next(this._travelsDB)
  }

  getEmptyTravel() {
    return { country: '', startDate: new Date(), endDate: new Date(), notes: '', flag: '' }
  }

  getAutoCompleteOptions(userInput: string) {
    return this.http.get<AutoCompleteResponse[]>(this._url + `name/${userInput}`).pipe(
      map(countries => countries.map(country => {
        return { country: country.name.common, flag: country.flags.png }
      }))
    )

  }

}
