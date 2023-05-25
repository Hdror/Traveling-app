import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTravelsComponent } from './pages/my-travels/my-travels.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-travels',
    pathMatch: 'full',
  },
  {
    path: 'my-travels',
    component: MyTravelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
