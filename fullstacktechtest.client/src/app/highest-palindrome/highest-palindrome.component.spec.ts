import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestPalindromeComponent } from './highest-palindrome.component';

describe('HighestPalindromeComponent', () => {
  let component: HighestPalindromeComponent;
  let fixture: ComponentFixture<HighestPalindromeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestPalindromeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestPalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
