import { Component, OnInit } from '@angular/core';
import { PortfolioItem, PORTFOLIOITEMS } from '../classes/portfolioItem';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolioItems: PortfolioItem[] = PORTFOLIOITEMS;

  constructor() { }

  ngOnInit() {}


}
