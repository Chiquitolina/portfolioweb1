import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder) { 
    this.form=this.formBuilder.group(
      {
          email:['', [Validators.required, Validators.email]],
          password:['',[Validators.required, Validators.minLength(8)]],
          deviceInfo:this.formBuilder.group({
            devideId: ["17867868768"],
            deviceType: ["DEVICE_TYPE_ANDROID"],
            notificationToken:["67657575eececc34"]
          })
      }
    )
  }
  ngOnInit(): void {
  }

  get Email()
  {return this.form.get('email');
}

get Password() {
  return this.form.get('password');
}

}
