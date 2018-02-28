import { Component, OnInit } from '@angular/core';
import { TextView } from "ui/text-view";

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
FName = "pinky"
  constructor() {
    
  }

  ngOnInit() :void { }

  signUp(): void
  {
    
    console.log(this.FName)
  }
   
}
