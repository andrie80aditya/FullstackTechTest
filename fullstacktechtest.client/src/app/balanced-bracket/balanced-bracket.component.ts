import { Component } from '@angular/core';
import { BalancedBracketService } from './balanced-bracket.service';

@Component({
  selector: 'app-balanced-bracket',
  templateUrl: './balanced-bracket.component.html',
  styleUrls: ['./balanced-bracket.component.css']
})
export class BalancedBracketComponent {
  input: string = '';
  result: string = '';

  constructor(private balancedBracketService: BalancedBracketService) { }

  checkBalancedBrackets(): void {
    this.balancedBracketService.checkBalancedBrackets(this.input)
      .subscribe(response => {
        this.result = response;
      });
  }
}
