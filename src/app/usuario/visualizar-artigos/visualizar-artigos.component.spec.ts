import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarArtigosComponent } from './visualizar-artigos.component';

describe('VisualizarArtigosComponent', () => {
  let component: VisualizarArtigosComponent;
  let fixture: ComponentFixture<VisualizarArtigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarArtigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
