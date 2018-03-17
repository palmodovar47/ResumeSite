import { Component, OnInit } from '@angular/core';
import { Ref, REFS } from '../classes/reference';

@Component({
  selector: 'app-ref',
  templateUrl: './ref.component.html',
  styleUrls: ['./ref.component.css']
})
export class RefComponent implements OnInit {

  refs: Ref[] = REFS;

  constructor() { }

  ngOnInit() {
  }

}
