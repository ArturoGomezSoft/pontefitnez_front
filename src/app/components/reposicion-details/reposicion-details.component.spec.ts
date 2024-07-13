import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposicionDetailsComponent } from './reposicion-details.component';

describe('ReposicionDetailsComponent', () => {
  let component: ReposicionDetailsComponent;
  let fixture: ComponentFixture<ReposicionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposicionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposicionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
