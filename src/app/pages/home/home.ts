import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @Input() welcomeMessage: string = 'Welcome to our awesome website!'; // <--- IDAGDAG ITO
  
  // Puwede mo ring magdagdag ng iba pang properties dito
  siteDescription: string = 'We provide amazing services and solutions.';
  features = [
    { 
      title: 'High Performance', 
      description: 'Leverage Angular\'s core speed and efficiency to deliver fast and reliable user experiences.' 
    },
    { 
      title: 'Scalable Architecture', 
      description: 'We design applications with modularity in mind, ensuring your project can grow without limits.' 
    },
    { 
      title: 'Modern UI/UX', 
      description: 'Stunning and responsive interfaces using the latest web standards and Bootstrap framework.' 
    }
  ];

  
}
