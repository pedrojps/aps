import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArasComponent } from './select-aras.component';

describe('SelectArasComponent', () => {
  let component: SelectArasComponent;
  let fixture: ComponentFixture<SelectArasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
