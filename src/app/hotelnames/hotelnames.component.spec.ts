import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelnamesComponent } from './hotelnames.component';

describe('HotelnamesComponent', () => {
  let component: HotelnamesComponent;
  let fixture: ComponentFixture<HotelnamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelnamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
