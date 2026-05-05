// Imports av HttpClient 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Ett interface som definierar en kurs
export interface Course {
  coursename: string;
  code: string;
  progression: string;
  syllabus: string;
}

// En service som hämtar info från JSON
@Injectable({
  providedIn: 'root',
})

// Ett interface som definierar en kurs, en service och hämtar info från JSON
export class CourseService {
  private apiURL = 'ramschema.json';

  // Använder HttpClient för att hämta data från JSON
  constructor(private http: HttpClient) {}

  // En metod som returnerar en Observable av Course array
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiURL);
  }
}
