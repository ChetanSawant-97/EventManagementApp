import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTicketRoutingModule } from './book-ticket-routing.module';
import { MovieTicketComponent } from './movie-ticket/movie-ticket.component';
import { BusTicketComponent } from './bus-ticket/bus-ticket.component';
import { ConcertsTicketComponent } from './concerts-ticket/concerts-ticket.component';

@NgModule({
  declarations: [
    MovieTicketComponent,
    BusTicketComponent,
    ConcertsTicketComponent
  ],
  imports: [
    CommonModule,
    BookTicketRoutingModule,
  ]
})
export class BookTicketModule { }
