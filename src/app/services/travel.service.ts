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
    this._travelsDB.push(travel)
    this._travels$.next(this._travelsDB)
  }

}
