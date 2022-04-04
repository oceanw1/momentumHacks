import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-sidebar',
  templateUrl: './start-sidebar.component.html',
  styleUrls: ['./start-sidebar.component.scss'],
})
export class StartSidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openSideBarInfo0() {
    this.router.navigate(['/maps', 0]);
  }
  openSideBarInfo1() {
    this.router.navigate(['/maps', 1]);
  }
  openSideBarInfo2() {
    this.router.navigate(['/maps', 2]);
  }
  openSideBarInfo3() {
    this.router.navigate(['/maps', 3]);
  }
  openSideBarInfo4() {
    this.router.navigate(['/maps', 4]);
  }
  openSideBarInfo5() {
    this.router.navigate(['/maps', 5]);
  }
}
