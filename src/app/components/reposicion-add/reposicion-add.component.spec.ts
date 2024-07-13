import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposicionAddComponent } from './reposicion-add.component';

describe('ReposicionAddComponent', () => {
  let component: ReposicionAddComponent;
  let fixture: ComponentFixture<ReposicionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposicionAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposicionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
