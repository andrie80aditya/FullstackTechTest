import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancedBracketComponent } from './balanced-bracket.component';

describe('BalancedBracketComponent', () => {
  let component: BalancedBracketComponent;
  let fixture: ComponentFixture<BalancedBracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BalancedBracketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalancedBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
