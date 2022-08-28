import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  images = [
    'assets/test.jpg',
    'assets/test.jpg',
    'assets/test.jpg'
  ]

  ngOnInit(): void {

  }
}
