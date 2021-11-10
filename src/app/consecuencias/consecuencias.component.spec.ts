import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsecuenciasComponent } from './consecuencias.component';

describe('ConsecuenciasComponent', () => {
  let component: ConsecuenciasComponent;
  let fixture: ComponentFixture<ConsecuenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsecuenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsecuenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
