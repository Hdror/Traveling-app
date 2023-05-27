import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-options-drop-down',
  templateUrl: './options-drop-down.component.html',
  styleUrls: ['./options-drop-down.component.scss']
})
export class OptionsDropDownComponent implements OnInit {

  constructor() { }

  @Input() options!: Partial<Omit<Travel, "startDate" | "endDate">>[]


  ngOnInit(): void {
  }

}
