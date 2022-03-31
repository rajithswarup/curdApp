import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedeskComponent } from './servicedesk.component';

describe('ServicedeskComponent', () => {
  let component: ServicedeskComponent;
  let fixture: ComponentFixture<ServicedeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicedeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicedeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
