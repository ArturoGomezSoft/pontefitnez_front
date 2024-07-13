import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposicionModel } from './reposicion.model';

describe('ReposicionModel', () => {
  let component: ReposicionModel;
  let fixture: ComponentFixture<ReposicionModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposicionModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposicionModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
