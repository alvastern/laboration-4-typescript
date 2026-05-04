import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../services/course';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
    });
  }
}