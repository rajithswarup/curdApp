import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdwdashboardComponent } from './edwdashboard.component';

describe('EdwdashboardComponent', () => {
  let component: EdwdashboardComponent;
  let fixture: ComponentFixture<EdwdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdwdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdwdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
