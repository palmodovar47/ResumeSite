import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Job, JOBS } from '../classes/job';
import 'rxjs/add/operator/switchMap';
import { slideInDownAnimation  } from '../animations';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  animations: [slideInDownAnimation]
})
export class JobComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'relative';

  job: Job;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => this.job = JOBS[params.get('id')]);
  }
}
