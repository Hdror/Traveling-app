import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-traveling-form',
  templateUrl: './traveling-form.component.html',
  styleUrls: ['./traveling-form.component.scss']
})
export class TravelingFormComponent implements OnInit {

  constructor(private travelService: TravelService) { }


  newTravel!: Travel

  ngOnInit(): void {
    this.newTravel = this.travelService.getEmptyTravel()
  }

  handleChange(ev:string){
    console.log(ev);
    this.travelService.getAutoCompleteOptions(ev).subscribe(res=>console.log(res)
    )

  }

}
