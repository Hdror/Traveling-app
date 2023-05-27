import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, debounceTime, switchMap } from 'rxjs';
import { AutoCompleteOption } from 'src/app/models/auto-complete-option';
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
  autoCompleteOptions!: AutoCompleteOption[]
  isOptionsModalOpen = false


  @Output() onCloseModal = new EventEmitter()

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
      next: e => {
        this.isOptionsModalOpen = true
        this.autoCompleteOptions = e
      },
      error: e => console.log(e)

    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }


  onCloseAddModal() {
    this.onCloseModal.emit()
  }


  updateForm(option: AutoCompleteOption) {
    console.log(option);
    if (option.country)
      this.newTravel.country = option.country
    if (option.flag)
      this.newTravel.flag = option.flag
    this.isOptionsModalOpen = false
  }

}
