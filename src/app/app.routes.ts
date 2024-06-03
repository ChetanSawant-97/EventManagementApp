import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboardComponent } from './user-details/dashboard/dashboard.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,
        children:[
            {path:"login",
                loadComponent:()=>import('./home/login/login.component').then(m=>m.LoginComponent)
            },
            {path:"signup", 
                loadComponent:()=>import('./home/signup/signup.component').then(m=>m.SignupComponent)
            }
        ]
     },
     {
        path:"user",component:UserDetailsComponent,
        children:[
            {path:"", component:DashboardComponent},
            {path:"createEvent",
                loadComponent:()=>import('./user-details/create-event/create-event.component').then(m=>m.CreateEventComponent)
            },
            {path:"registerEvent", 
                loadComponent:()=>import('./user-details/register-event/register-event.component').then(m=>m.RegisterEventComponent),
            },
            {path:"feedback",
                loadComponent:()=>import('./user-details/feedback-form/feedback-form.component').then(m=>m.FeedbackFormComponent)
            },
            {path:"bookTicket", 
                loadComponent:()=>import('./user-details/book-ticket/book-ticket.component').then(m=>m.BookTicketComponent)
            },
            {path:"history", 
                loadComponent:()=>import('./user-details/history/history.component').then(m=>m.HistoryComponent)
            }
        ]
     }
];
