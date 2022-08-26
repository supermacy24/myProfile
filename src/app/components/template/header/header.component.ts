import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {

  }
  toHome() {
    this.scroller.scrollToAnchor("home");
  }
  toSobre() {
    this.scroller.scrollToAnchor("sobre");
  }
  toContactos(){
    this.scroller.scrollToAnchor("contactos");
  }
  
}
