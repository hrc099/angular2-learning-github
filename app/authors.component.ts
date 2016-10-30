import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import AuthorsService from './authors.service';
import Author from './author';

@Component({
  selector: 'authors',
  template: `<h2>Authors</h2>{{ title }}
  <ul>
    <li *ngFor="let author of authors">{{ author.name }} {{ author.surname }}</li>
  </ul>`,
  providers: [AuthorsService]
})

export class AuthorsComponent implements OnInit {
    title = "If you want to learn from the best, try these";
    authors: Author[];
    constructor(private aS: AuthorsService) {
    }
    ngOnInit(): void {
      this.getAuthors();
    }
    getAuthors(): void {
      this.aS.getAuthors().then(authors => this.authors = authors);
    }
}