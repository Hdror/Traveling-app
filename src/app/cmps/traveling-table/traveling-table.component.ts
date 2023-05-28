import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-traveling-table',
  templateUrl: './traveling-table.component.html',
  styleUrls: ['./traveling-table.component.scss']
})
export class TravelingTableComponent {

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

  sortBy = {
    field: '',
    ascending: false
  }

  onSortBy(field: string) {
    // if (field === "Notes" || field === "Flag") return
      this.sortBy.ascending = field !== this.sortBy.field ? true : !this.sortBy.ascending
    this.sortBy.field = field
    if (this.travels) {
      switch (field) {
        case "Country":
          this.travels.sort((a, b) => {
            const compare = a.country.toLowerCase().localeCompare(b.country.toLowerCase());
            return this.sortBy.ascending ? compare : -compare;
          })
          break;
        case "Start-Date":
          this.travels.sort((a, b) => {
            const compare = new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
            return this.sortBy.ascending ? compare : -compare;
          })
          break;
        case "End-Date":
          this.travels.sort((a, b) => {
            const compare = new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
            return this.sortBy.ascending ? compare : -compare;
          })
          break
        default:
      }
    }

  }

}
