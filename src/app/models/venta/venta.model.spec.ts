import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaModel } from './venta.model';

describe('VentaModel', () => {
  let component: VentaModel;
  let fixture: ComponentFixture<VentaModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentaModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
