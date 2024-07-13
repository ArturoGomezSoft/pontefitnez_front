import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaAddComponent } from './membresia-add.component';

describe('MembresiaAddComponent', () => {
  let component: MembresiaAddComponent;
  let fixture: ComponentFixture<MembresiaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembresiaAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
