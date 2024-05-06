import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from 'src/Models/Course';
import { Documentt } from 'src/Models/Document';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  @Input() course: Course
  @Input() documentts: Documentt[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.course = data.course;
    this.documentts = data.documentts;
  }
}
