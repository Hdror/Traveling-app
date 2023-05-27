import { Injectable } from '@angular/core';
import { Travel } from '../models/travel';
import { BehaviorSubject, Observable, catchError, filter, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AutoCompleteResponse } from '../models/auto-complete-response';

@Injectable({
  providedIn: 'root'
})

export class TravelService {
  constructor(private http: HttpClient) { }

  private _travelsDB: Travel[] = [
    { country: "usa", startDate: new Date(), endDate: new Date(), notes: '', flag: "https://flagcdn.com/w320/lu.png", _id: 't204' },
    { country: "italy", startDate: new Date(), endDate: new Date(), notes: '', flag: "https://flagcdn.com/w320/lu.png", _id: 't206' },
    { country: "uk", startDate: new Date(), endDate: new Date(), notes: '', flag: "https://flagcdn.com/w320/lu.png", _id: 't205' }
  ]

  private _travels$ = new BehaviorSubject<Travel[]>([])
  travels$ = this._travels$.asObservable()
  private _url = "https://restcountries.com/v3.1/"

  query() {
    this._travels$.next(this._travelsDB)
  }

  getEmptyTravel() {
    return { country: '', startDate: new Date(), endDate: new Date(), notes: '', flag: '', _id: this._makeId() }
  }

  getAutoCompleteOptions(userInput: string) {
    // REGEX pattern to match the search input at the start of each word in the country name , including handling accents and diacritics like 'Réunion'
    const regex = new RegExp(`(?<=^|\\s)${userInput}`, 'ui')
    return this.http.get<AutoCompleteResponse[]>(this._url + `name/${userInput}`)
      .pipe(
        tap(() => { }),
        catchError(() => of([])),
        map(countries => countries.map(country => {
          return { country: country.name.common, flag: country.flags.svg }
        })
          .filter(country => regex.test(country.country))
        )
      )
  }

  addNewTravel(travel: Travel) {
    this._travelsDB.unshift(travel)
    this._travels$.next(this._travelsDB)
  }

  removeTravel(travelId: string) {
    const travels = this._travelsDB
    const travelToRemoveIdx = travels.findIndex(travel => travel._id === travelId)
    travels.splice(travelToRemoveIdx, 1)
    this._travels$.next(travels)
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}

