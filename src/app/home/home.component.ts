import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 constructor(private router:Router)
 {
   
 }
  dashboard()
  {
        this.router.navigate(['/business'])
  }
}
