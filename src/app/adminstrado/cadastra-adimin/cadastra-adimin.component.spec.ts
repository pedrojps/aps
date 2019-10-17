import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAdiminComponent } from './cadastra-adimin.component';

describe('CadastraAdiminComponent', () => {
  let component: CadastraAdiminComponent;
  let fixture: ComponentFixture<CadastraAdiminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraAdiminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraAdiminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
