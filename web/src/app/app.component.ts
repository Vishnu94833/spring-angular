import { Component, OnInit } from '@angular/core';
import { GlobalService } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
 
  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
  }
}

// service.ts
