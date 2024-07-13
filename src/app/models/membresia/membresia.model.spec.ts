import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaModel } from './membresia.model';

describe('MembresiaModel', () => {
  let component: MembresiaModel;
  let fixture: ComponentFixture<MembresiaModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembresiaModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiaModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
