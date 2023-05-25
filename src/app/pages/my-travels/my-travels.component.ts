import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-my-travels',
  templateUrl: './my-travels.component.html',
  styleUrls: ['./my-travels.component.scss']
})
export class MyTravelsComponent implements OnInit {

  constructor(private travelService: TravelService) { }

  travels$!: Observable<Travel[]>

  ngOnInit(): void {
    this.travelService.query()
    this.travels$ = this.travelService.travels$
  }

}
