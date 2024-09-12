import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarHorariosComponent } from './administrar-horarios.component';

describe('AdministrarHorariosComponent', () => {
  let component: AdministrarHorariosComponent;
  let fixture: ComponentFixture<AdministrarHorariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrarHorariosComponent]
    });
    fixture = TestBed.createComponent(AdministrarHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
