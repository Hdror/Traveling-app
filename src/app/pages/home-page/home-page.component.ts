import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private travelService: TravelService) { }

  travels$!: Observable<Travel[]>

  isAddModalOpen = false

  ngOnInit(): void {
    this.travelService.query()
    this.travels$ = this.travelService.travels$
  }

  onToggleModal() {
    this.isAddModalOpen = !this.isAddModalOpen
  }

  onRemoveTravel(travelId: string) {
  this.travelService.removeTravel(travelId)
  }

}
