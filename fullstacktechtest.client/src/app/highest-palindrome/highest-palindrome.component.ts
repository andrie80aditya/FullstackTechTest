import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-highest-palindrome',
  templateUrl: './highest-palindrome.component.html',
  styleUrls: ['./highest-palindrome.component.css']
})
export class HighestPalindromeComponent {
  number: string = '';
  k: number = 0;
  result: string | null = null;
  apiUrl = 'https://localhost:7088/api/HighestPalindrome/'; // Ensure this matches your backend URL

  constructor(private http: HttpClient) { }

  findHighestPalindrome(form: any): void {
    if (form.valid) {
      this.http.get(`${this.apiUrl}${this.number}/${this.k}`, { responseType: 'text' })
        .subscribe({
          next: (response) => {
            this.result = response;
          },
          error: (err) => {
            console.error('Error fetching data', err);
            this.result = 'Error fetching data';
          }
        });
    }
  }
}
