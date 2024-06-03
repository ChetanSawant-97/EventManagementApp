import { Component, Input, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import { BookTicketModule } from './book-ticket/book-ticket.module';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  standalone: true,
  imports: [BookTicketModule, RouterOutlet, NgClass,RouterLink, FormsModule],
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.scss'
})
export class BookTicketComponent implements OnChanges {

  firstName:string='';


  routesForComponents:any;
  activeTab:string="movieTicket";

  constructor(private router:Router){
    this.routesForComponents = router.config;
    console.log('contructor was Called'); 
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes[this.firstName]){
      const changesCaught = changes[this,this.firstName];
      console.log('Changes Are ' + changesCaught);
      console.log('Previous Value '+ changesCaught.previousValue)
      console.log('Cuurent Value '+ changesCaught.currentValue)
    }
  }

  changeTab(tabName:string){
    this.activeTab = tabName;
  }

}
