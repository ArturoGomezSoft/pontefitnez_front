import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresiaDetailsComponent } from './membresia-details.component';

describe('MembresiaDetailsComponent', () => {
  let component: MembresiaDetailsComponent;
  let fixture: ComponentFixture<MembresiaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembresiaDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembresiaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
