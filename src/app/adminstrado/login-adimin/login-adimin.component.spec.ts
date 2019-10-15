import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdiminComponent } from './login-adimin.component';

describe('LoginAdiminComponent', () => {
  let component: LoginAdiminComponent;
  let fixture: ComponentFixture<LoginAdiminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdiminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdiminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
