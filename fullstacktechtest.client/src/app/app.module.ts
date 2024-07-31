import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeightedStringsComponent } from './weighted-strings/weighted-strings.component';
import { BalancedBracketComponent } from './balanced-bracket/balanced-bracket.component';
import { HighestPalindromeComponent } from './highest-palindrome/highest-palindrome.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WeightedStringsComponent,
    BalancedBracketComponent,
    HighestPalindromeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
