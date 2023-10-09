import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsadminComponent } from './list-productsadmin.component';

describe('ListProductsadminComponent', () => {
  let component: ListProductsadminComponent;
  let fixture: ComponentFixture<ListProductsadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductsadminComponent]
    });
    fixture = TestBed.createComponent(ListProductsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
