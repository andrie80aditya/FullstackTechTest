import { Component } from '@angular/core';
import { WeightedStringsService } from './weighted-strings.service';

@Component({
  selector: 'app-weighted-strings',
  templateUrl: './weighted-strings.component.html',
  styleUrls: ['./weighted-strings.component.css']
})
export class WeightedStringsComponent {
  inputString: string = '';
  queries: string = '';
  results: string[] = [];

  constructor(private weightedStringsService: WeightedStringsService) { }

  onSubmit(): void {
    const queriesArray = this.queries.split(',').map(q => parseInt(q.trim()));
    this.weightedStringsService.getWeightedStringsResult(this.inputString, queriesArray)
      .subscribe(response => {
        this.results = response;
      });
  }
}
