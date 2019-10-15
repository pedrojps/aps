import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventoComponent } from './edit-evento.component';

describe('EditEventoComponent', () => {
  let component: EditEventoComponent;
  let fixture: ComponentFixture<EditEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
