import { Component, Input, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';

@Component({
  selector: 'app-travel-preview',
  templateUrl: './travel-preview.component.html',
  styleUrls: ['./travel-preview.component.scss']
})
export class TravelPreviewComponent implements OnInit {

  constructor() { }

  @Input() travel!:Travel

  ngOnInit(): void {
  }

}
