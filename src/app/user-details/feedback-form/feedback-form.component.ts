import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormGroup, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.scss'
})

export class FeedbackFormComponent {
  submitFeedback:any;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void{
    this.submitFeedback = this.formBuilder.group({
      userName:["", Validators.required],
      sessionAttended:["", Validators.required],
      description:["",Validators.required]
    })
  }

  onSubmitFeedback(){
    if(this.submitFeedback.valid){
      alert(JSON.stringify(this.submitFeedback.value));
    }else{
      alert("Invalid Field Values");
    }
  }
}
