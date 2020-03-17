import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    public searchEntitiesByLabel(label: string, selectedLanguage: string): Observable<object> {
        return this.http.get(`http://localhost:5000/search/entities.json?label=${label}&lang=${selectedLanguage}`);
    }

    generateQuestions(id: string, category: string, limit: number, language: string) {
        // return this.http.get(`/assets/apple_company.json`);
        return this.http.get(`http://127.0.0.1:5000/generate/questions.json?entity=${id}
        &category=${category}&lang=${language}&limit=${limit}`);
    }
}
