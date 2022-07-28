import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BookService {
    private url = "https://my-json-server.typicode.com/klaynmolina/book-json/livros";

    httpOptions = {
        Headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    constructor(private http: HttpClient) {}

    getBook(){
        return this.http.get(this.url)
    }
}