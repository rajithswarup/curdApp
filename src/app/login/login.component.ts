import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';
//import {MdToast} from 'md-toast';
//import{Http,Response} from '@angular/Http';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  loginForm!: FormGroup;
  //toast!: MdToast;
  constructor(private router:Router,private toastr: ToastrService){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }//,private toast: MdToast// { }
  gotopage() 
  {
    
    if(this.loginForm.value.username!="admin")
    {
    // alert("incorrect username")              
      this.loginForm.reset();
      this.toastr.error('incorrect username')
      //mdToast.showSimple();
     //// this.loginForm.value.username=""
    }  else if(this.loginForm.value.password!="12345678")
     {
      //alert("incorrect password")
      this.loginForm.reset();
      this.toastr.error('incorrect password')                                          
      //this.loginForm.value.password=""
    }else{
      this.router.navigate(['/home'])
    }
   // var num1 = ((document.getElementById("username") as HTMLInputElement).value);
  // var num2 = ((document.getElementById("password") as HTMLInputElement).value);
   // console.log(num1);
    //console.log(num2);

    //this.router.navigate(['/home'])
   // console.log('it does nothing',this.password);
  }

  ngOnInit() 
  {
    this.loginForm =new FormGroup(
    {
      username : new FormControl('',[Validators.required,]),
      password : new FormControl('',[Validators.required,Validators.minLength(8)])
    }
    );
  }
}
