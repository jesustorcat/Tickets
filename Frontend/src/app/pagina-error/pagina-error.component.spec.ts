import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaErrorComponent } from './pagina-error.component';

describe('PaginaErrorComponent', () => {
  let component: PaginaErrorComponent;
  let fixture: ComponentFixture<PaginaErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
