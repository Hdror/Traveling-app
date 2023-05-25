import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTravelsComponent } from './pages/my-travels/my-travels.component';

const routes: Routes = [
  {
    path: '',
    component: MyTravelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
