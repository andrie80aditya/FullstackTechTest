import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightedStringsComponent } from './weighted-strings.component';

describe('WeightedStringsComponent', () => {
  let component: WeightedStringsComponent;
  let fixture: ComponentFixture<WeightedStringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeightedStringsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightedStringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
