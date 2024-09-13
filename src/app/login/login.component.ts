import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
     userName='';
     userPassword='';
     
     constructor(private router:Router){
        
     }

     submitForm(){
         const userMap = {
           login:'pwd'
         } as { [key: string]: string };

         if(userMap[this.userName] && userMap[this.userName] === this.userPassword){
             sessionStorage.setItem('insession',JSON.stringify(true))
             this.router.navigateByUrl('/home')   
         }else{
          alert('user does not exists')
         }
         console.log('UserName and Pwd',this.userName,this.userPassword);
     }

}
