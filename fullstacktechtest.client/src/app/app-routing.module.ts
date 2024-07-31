import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeightedStringsComponent } from './weighted-strings/weighted-strings.component';
import { BalancedBracketComponent } from './balanced-bracket/balanced-bracket.component';
import { HighestPalindromeComponent } from './highest-palindrome/highest-palindrome.component';

const routes: Routes = [
  { path: 'weighted-strings', component: WeightedStringsComponent },
  { path: 'balanced-bracket', component: BalancedBracketComponent },
  { path: 'highest-palindrome', component: HighestPalindromeComponent },
  { path: '', redirectTo: '/weighted-strings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
