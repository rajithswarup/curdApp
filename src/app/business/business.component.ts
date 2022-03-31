import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from '../data.service';
import { List, User } from '../user.model';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
    info: any =[];
  constructor(private router:Router,private dataService:DataService) { }
  ngOnInit() 
  {
    return this.dataService.getUsers().subscribe((result)=>{
      console.warn(result)
      this.info=result});
  
  }

}
