import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Course {
  coursename: string;
  code: string;
  progression: string;
  syllabus: string;
}

@Injectable({
  providedIn: 'root',
})

export class CourseService {
  private apiURL = '/ramschema.json';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiURL);
  }
}
