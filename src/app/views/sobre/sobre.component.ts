import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
 
 
  numberOfBars: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
