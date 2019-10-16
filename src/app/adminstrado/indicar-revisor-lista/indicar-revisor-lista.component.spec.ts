import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicarRevisorListaComponent } from './indicar-revisor-lista.component';

describe('IndicarRevisorListaComponent', () => {
  let component: IndicarRevisorListaComponent;
  let fixture: ComponentFixture<IndicarRevisorListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicarRevisorListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicarRevisorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
