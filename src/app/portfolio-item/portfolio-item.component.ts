import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PortfolioItem, PORTFOLIOITEMS } from '../classes/portfolioItem';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
  animations: [slideInDownAnimation]
})
export class PortfolioItemComponent implements OnInit {


  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  portfolioItem: PortfolioItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => this.portfolioItem =
          PORTFOLIOITEMS[params.get('id')]);
  }
}
