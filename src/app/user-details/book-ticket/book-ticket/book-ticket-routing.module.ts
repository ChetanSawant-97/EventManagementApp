import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTicketComponent } from './movie-ticket/movie-ticket.component';
import { ConcertsTicketComponent } from './concerts-ticket/concerts-ticket.component';
import { BusTicketComponent } from './bus-ticket/bus-ticket.component';

export const routes: Routes = [
      {path:"movieTicket", component:MovieTicketComponent},
      {path:"concerts", component:ConcertsTicketComponent},
      {path:"busTicket",component:BusTicketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BookTicketRoutingModule {
  static routes = routes;
 }
