import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import {Router} from '@angular/router';
import { SignUp } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{
  constructor(private seller:SellerService, private router:Router){}
  authError:string=''
  authErrorSign:string=''
  showLogin= false
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
    
  signUp(data:SignUp):void{
      console.warn(data)
      this.seller.userSignUp(data)
      this.seller.isSignUpError.subscribe((isEr)=>{
        if(isEr){
          this.authErrorSign='Email or password cannot be null!!!!'
        }
      })
  }
  login(data:SignUp):void{
    //console.warn(data)
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct!!!!"
      }
    })
}
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
 
// .subscribe((result)=>{
//   if(result){
//     this.router.navigate(['seller-home'])
//   }
// });