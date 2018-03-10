import { Component, OnInit } from '@angular/core';
import {FireBaseDbService} from '../services/fire-base-db.service'
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public logs : any;
  constructor(private FireDbService : FireBaseDbService , private fonticon: TNSFontIconService) { 
    
  }
getLogs(): void
{
  this.logs = this.FireDbService.logs;

}

  ngOnInit() { }

}
