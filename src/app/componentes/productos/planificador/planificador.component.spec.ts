import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificadorComponent } from './planificador.component';

describe('PlanificadorComponent', () => {
  let component: PlanificadorComponent;
  let fixture: ComponentFixture<PlanificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
