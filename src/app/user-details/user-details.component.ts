import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

}
