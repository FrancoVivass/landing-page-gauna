import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trayectoria } from './trayectoria';

describe('Trayectoria', () => {
  let component: Trayectoria;
  let fixture: ComponentFixture<Trayectoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trayectoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trayectoria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
