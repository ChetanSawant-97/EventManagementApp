import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, Form } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss'
})
export class CreateEventComponent {
  createEventForm :any;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit():void{
    this.createEventForm = this.formBuilder.group({
      eventName:["", Validators.required],
      organizerName:["", Validators.required],
      location:["", Validators.required],
      description:["", Validators.required],
      date:["", [Validators.required, Validators.maxLength(10)]],
      capacity:["", [Validators.required,Validators.maxLength(6)]],
      deadline:["", Validators.required],
      type:["", Validators.required],
    })
  }

  onSubmitEvent(){
      if(this.createEventForm.valid){
        alert(JSON.stringify(this.createEventForm.value));
      }else{
        console.log("Something Went Wrong");
      }
      console.log();
  }

}
