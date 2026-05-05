import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course, CourseService } from '../services/course';
import { CommonModule } from '@angular/common';

// En komponent som visar listan av kurser
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

// Klass som implementerar OnInit och hämtar kurserna från CourseService
export class Home implements OnInit {
  courses: Course[] = [];

  // Constructor som hämtar CourseService
  constructor(private courseService: CourseService, 
    private cdr: ChangeDetectorRef
  ) {}

  // OnInit som hämtar kurserna
  ngOnInit(): void {
  console.log('ngOnInit körs');

  this.courseService.getCourses().subscribe({
    next: (data) => {
      this.courses = data;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('Fel vid hämtning:', err);
    }
  });
}
}