import { Component, OnInit, Input } from '@angular/core';
import { TextView } from "ui/text-view";
import {User} from '../model/user'
import {FireBaseDbService} from '../services/fire-base-db.service'

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  
  constructor(private fbservice : FireBaseDbService) {
    this.user = new User()
  }

  ngOnInit() :void { }

  signUp(): void
  {
    
    console.log(JSON.stringify(this.user))
  this.fbservice.registerUser({
     email : this.user.email,
     password : this.user.password
   })
   
  }
   
}
