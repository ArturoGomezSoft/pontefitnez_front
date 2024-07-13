import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloModel } from './articulo.model';

describe('ArticuloModel', () => {
  let component: ArticuloModel;
  let fixture: ComponentFixture<ArticuloModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticuloModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
