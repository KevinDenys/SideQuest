import { Component, Input, OnInit } from '@angular/core';
import { AppService, ThemeMode } from '../app.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  theme = ThemeMode;
  @Input('url') url:string;
  @Input('text') text:string;
  @Input('isDark') isDark:boolean;
  constructor(public appService:AppService) {

  }

  ngOnInit() {
  }

  open(){
    console.log(this.url);
    this.appService.opn(this.url);
  }
}
