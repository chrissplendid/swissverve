import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    this.loadExternalScript('https://swissverve.com/assets/assets/js/slick.min.js');
    this.loadExternalScript('https://swissverve.com/assets/assets/js/jquery.counterup.min.js');
    this.loadExternalScript('https://swissverve.com/assets/assets/js/main.js');
  }

  loadExternalScript(src: string) {
    if (isPlatformBrowser(this.platformId)) {
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
}
