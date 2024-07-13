import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloAddComponent } from './articulo-add.component';

describe('ArticuloAddComponent', () => {
  let component: ArticuloAddComponent;
  let fixture: ComponentFixture<ArticuloAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticuloAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
