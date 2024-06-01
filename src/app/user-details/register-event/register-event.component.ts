import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-event',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-event.component.html',
  styleUrl: './register-event.component.scss'
})
export class RegisterEventComponent {
  scheduleEvent:any;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.scheduleEvent = this.formBuilder.group({
      fullName:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      sessionTitle:["", Validators.required],
      description:["",Validators.required],
      speakerName:["", Validators.required],
      speakerBio:["", Validators.required],
      sessionDate:["", Validators.required],
      startTime:["", Validators.required],
      endTime:["", Validators.required],
      roomLocation:[Validators.required]
    })  
  }

  onScheduleSubmit(){
      if(this.scheduleEvent.valid){
        alert(JSON.stringify(this.scheduleEvent.value));
      }else{
        alert("Invalid Details Entered");
      }
  }


}
