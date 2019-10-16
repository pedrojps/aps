import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicarRevisorComponent } from './indicar-revisor.component';

describe('IndicarRevisorComponent', () => {
  let component: IndicarRevisorComponent;
  let fixture: ComponentFixture<IndicarRevisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicarRevisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicarRevisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
