import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-travel-preview',
  templateUrl: './travel-preview.component.html',
  styleUrls: ['./travel-preview.component.scss']
})
export class TravelPreviewComponent implements OnInit {

  constructor() { }

  @Input() travel!: Travel
  @Output() removeTravel = new EventEmitter<string>()

  ngOnInit(): void {
  }

  onRemoveTravel(ev: MouseEvent) {
    ev.stopPropagation()
    this.removeTravel.emit(this.travel._id)
  }

}
