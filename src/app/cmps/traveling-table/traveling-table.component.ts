import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-traveling-table',
  templateUrl: './traveling-table.component.html',
  styleUrls: ['./traveling-table.component.scss']
})
export class TravelingTableComponent implements OnInit {

  constructor() { }

  @Input() travels!: Travel[] | null
  @Output() removeTravel = new EventEmitter<string>()

  tableTitles: string[] = [
    "Flag",
    "Country",
    "Start-Date",
    "End-Date",
    "Notes",
  ]

  ngOnInit(): void {
  }

}
