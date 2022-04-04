import { Component, OnInit } from '@angular/core';

declare function search(): void;
@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss'],
})
export class JobsPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    search();
  }
}
