import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterArtigoComponent } from './submeter-artigo.component';

describe('SubmeterArtigoComponent', () => {
  let component: SubmeterArtigoComponent;
  let fixture: ComponentFixture<SubmeterArtigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterArtigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
