import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposicionListComponent } from './reposicion-list.component';

describe('ReposicionListComponent', () => {
  let component: ReposicionListComponent;
  let fixture: ComponentFixture<ReposicionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposicionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposicionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
