import { Component, OnInit } from '@angular/core';
import { AdminModule } from './admin/admin.module';

@Component({
  selector: 'app-root',
  template: ` <div class="app">
    <header class="header">
      <img src="/assets/img/logo.svg" alt="Ultimate Donuts" class="logo"/>
    </header>
    <router-outlet></router-outlet>
  </div> `,
  styles: [
    `
      .app {
        background: #fff;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;  
      }
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;

      }
      .logo {
        width: 100px;
        height: 88px;


      }
    `,
  ],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Hello World!');
  }
}
