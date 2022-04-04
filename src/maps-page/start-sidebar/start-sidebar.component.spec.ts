import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSidebarComponent } from './start-sidebar.component';

describe('StartSidebarComponent', () => {
  let component: StartSidebarComponent;
  let fixture: ComponentFixture<StartSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
