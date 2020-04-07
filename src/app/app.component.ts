import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url: "https://correio-lageano.sfo2.digitaloceanspaces.com/2019/04/03145402/Serra-do-Rio-do-Rastro-Cr%C3%A9dito-Cristiano-AndujarDivulga%C3%A7%C3%A3o.jpg",
      description: "Serra do rio do rastro"
      
    },
    {
      url: "https://www.sulinfoco.com.br/wp-content/uploads/2016/12/cb45b1b27c489c799f84100762df815b.jpg", 
      description: "Serra da rocinha"
    }
  ];


}
