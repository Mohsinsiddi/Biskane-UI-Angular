import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresignupComponent } from './storesignup.component';

describe('StoresignupComponent', () => {
  let component: StoresignupComponent;
  let fixture: ComponentFixture<StoresignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
