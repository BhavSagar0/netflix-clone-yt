declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private router = inject(Router);


  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '553342486370-j11kd0p2215lesqabmgi16vu2l5pn2kj.apps.googleusercontent.com',
      callback: (resp: any) => {
        this.handleLogin(resp);
      },
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 250
    });
  }

  decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }

  handleLogin(response : any){
    if(response)
    {
      const payLoad = this.decodeToken(response.credential);
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
      this.router.navigate(["browse"]);
    }
  }
}
