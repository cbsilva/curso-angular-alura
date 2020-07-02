import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photos } from './photos';

const API = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(private http: HttpClient) { }

    listFromUser(usernanme: string)
    {
        return this.http
            .get<Photos[]>(`${API}/${usernanme}/photos`);
    }
}
