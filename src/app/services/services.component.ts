import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  ngOnInit(): void {
    this.loadExternalScript('https://swissverve.com/assets/assets/js/slick.min.js');
    this.loadExternalScript('https://swissverve.com/assets/assets/js/jquery.counterup.min.js');
    this.loadExternalScript('https://swissverve.com/assets/assets/js/main.js');
  }

  loadExternalScript(src: string) {
    const script = document.createElement('script');
    script.src = src;  // Path to your external JS file
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => {
      console.log('Theme JS loaded');
    };
    document.body.appendChild(script);
  }

}
