import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPalavraComponent } from './add-palavra.component';

describe('AddPalavraComponent', () => {
  let component: AddPalavraComponent;
  let fixture: ComponentFixture<AddPalavraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPalavraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
