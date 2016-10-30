import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import Author from './author';

@Injectable()
export default class AuthorsService {
    authors: Author[];

    constructor(private http: Http) {
    }

    getAuthors(): Promise<Author[]> {
        return this.http.get('app/authors.json').toPromise().then(response => this.authors)
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}