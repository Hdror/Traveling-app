import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, debounceTime, switchMap } from 'rxjs';
import { AutoCompleteResponse } from 'src/app/models/auto-complete-response';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-traveling-form',
  templateUrl: './traveling-form.component.html',
  styleUrls: ['./traveling-form.component.scss']
})
export class TravelingFormComponent implements OnInit, OnDestroy {

  constructor(private travelService: TravelService) { }


  newTravel!: Travel
  userInput$ = new BehaviorSubject<string>('')
  subscription!: Subscription
  autoCompleteOptions!: Partial<Omit<Travel, "startDate" | "endDate">>[]

  ngOnInit(): void {
    this.newTravel = this.travelService.getEmptyTravel()
    this.subscription = this.userInput$.pipe(debounceTime(1000)).subscribe(inputValue => this.onAutoCompleteSearch(inputValue))

  }

  handleChange(userInput: string) {
    this.userInput$.next(userInput)
    console.log(userInput);
  }

  onAutoCompleteSearch(input: string) {
    if (!input) {
      this.autoCompleteOptions = []
      return
    }
    this.travelService.getAutoCompleteOptions(input).subscribe({
      next: e => this.autoCompleteOptions = e,
      error: e => console.log(e)

    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
