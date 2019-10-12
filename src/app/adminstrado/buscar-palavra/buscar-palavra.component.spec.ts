import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPalavraComponent } from './buscar-palavra.component';

describe('BuscarPalavraComponent', () => {
  let component: BuscarPalavraComponent;
  let fixture: ComponentFixture<BuscarPalavraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPalavraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
