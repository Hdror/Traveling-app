import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Subscription, debounceTime } from 'rxjs';
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
  selectedCountry!: string
  flagUrl!: string
  userInput$ = new BehaviorSubject<string>('')
  subscription!: Subscription
  autoCompleteOptions!: AutoCompleteOption[]
  isOptionsModalOpen = false


  @Output() onCloseModal = new EventEmitter()

  ngOnInit(): void {
    this.newTravel = this.travelService.getEmptyTravel()
    this.subscription = this.userInput$.pipe(debounceTime(300)).subscribe(inputValue => this.onAutoCompleteSearch(inputValue))
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
    if (option.country)
      this.selectedCountry = option.country
    if (option.flag)
      this.flagUrl = option.flag
    this.isOptionsModalOpen = false
  }

  onAddNewTravel(form: NgForm) {
    const newTravel = { ...form.value, flag: this.flagUrl }
    this.travelService.addNewTravel(newTravel)
    this.onCloseAddModal()
  }

}
