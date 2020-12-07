import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rates',
  templateUrl: './star-rates.component.html',
  styleUrls: ['./star-rates.component.css']
})
export class StarRatesComponent implements OnInit {

  rate = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
