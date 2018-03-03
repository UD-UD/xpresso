import { Component, OnInit } from '@angular/core';
import {FireBaseDbService} from '../services/fire-base-db.service'

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public logs : any;
  constructor(private FireDbService : FireBaseDbService) { 
    
  }
getLogs(): void
{
  this.logs = this.FireDbService.logs;

}

  ngOnInit() { }

}
