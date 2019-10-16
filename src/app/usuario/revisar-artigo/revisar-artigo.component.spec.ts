import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarArtigoComponent } from './revisar-artigo.component';

describe('RevisarArtigoComponent', () => {
  let component: RevisarArtigoComponent;
  let fixture: ComponentFixture<RevisarArtigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisarArtigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarArtigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
