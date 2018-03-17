import { Component, OnInit } from '@angular/core';
import { Job, JOBS } from '../classes/job';


@Component({
  selector: 'app-my-resume',
  templateUrl: './my-resume.component.html',
  styleUrls: ['./my-resume.component.css']
})
export class MyResumeComponent implements OnInit {

  jobs: Job[] = JOBS;

  constructor() { }

  ngOnInit() {
  }

}
