import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoCompleteOption } from 'src/app/models/auto-complete-option';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-options-drop-down',
  templateUrl: './options-drop-down.component.html',
  styleUrls: ['./options-drop-down.component.scss']
})
export class OptionsDropDownComponent implements OnInit {

  constructor() { }

  @Input() options!: AutoCompleteOption[]
  @Output() onSelectCountry = new EventEmitter<AutoCompleteOption>()

  ngOnInit(): void {
  }

  selectCountry(option: AutoCompleteOption) {
    this.onSelectCountry.emit(option)
  }

}
