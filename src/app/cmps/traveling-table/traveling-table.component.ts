import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-traveling-table',
  templateUrl: './traveling-table.component.html',
  styleUrls: ['./traveling-table.component.scss']
})
export class TravelingTableComponent implements OnInit {

  constructor() { }

  @Input() travels!: Travel[] | null

  tableTitles: string[] = [
    "flag",
    "country",
    "startDate",
    "endDate",
    "notes",
  ]

  ngOnInit(): void {
  }

}
