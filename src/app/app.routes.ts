import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DashboardComponent } from './user-details/dashboard/dashboard.component';
import { CreateEventComponent } from './user-details/create-event/create-event.component';
import { FeedbackFormComponent } from './user-details/feedback-form/feedback-form.component';
import { BookTicketComponent } from './user-details/book-ticket/book-ticket.component';
import { HistoryComponent } from './user-details/history/history.component';
import { RegisterEventComponent } from './user-details/register-event/register-event.component';

export const routes: Routes = [
    {path:"",component:HomeComponent,
        children:[
            {path:"login", component:LoginComponent},
            {path:"signup", component:SignupComponent}
        ]
     },
     {
        path:"user",component:UserDetailsComponent,
        children:[
            {path:"", component:DashboardComponent},
            {path:"createEvent", component:CreateEventComponent},
            {path:"registerEvent", component:RegisterEventComponent},
            {path:"feedback", component:FeedbackFormComponent},
            {path:"bookTicket", component:BookTicketComponent},
            {path:"history", component:HistoryComponent}
        ]
     }
];
