import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course, CourseService } from '../services/course';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Komponent som visar en lista av kurser
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

// Interface för en kurs och en service som hämtar info från JSON
export class Home implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchTerm: string = '';

  // Constructor som implementerar courseService och ChangeDetectorRef
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) {}

  // OnInit som hämtar kurser + uppdaterar gränssnittet
  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
        this.filteredCourses = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Fel vid hämtning:', err);
      }
    });
  }

  // Funktion som filtrerar kurser baserat på användarens sökterm
  filterCourses(): void {
    this.filteredCourses = this.courses.filter(course =>
      course.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Funktion som sorterar kurser baserat på det valda fältet
  sortCourses(field: keyof Course): void {
    this.filteredCourses.sort((a, b) =>
      a[field].localeCompare(b[field])
    );
  }
}