import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayMapComponent } from './array-map.component';

describe('ArrayMapComponent', () => {
  let component: ArrayMapComponent;
  let fixture: ComponentFixture<ArrayMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
