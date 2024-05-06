import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/Models/Course';
import { CourseService } from 'src/app/services/course.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  displayedColumns: string[] = ['courseID', 'title', 'disponibility', 'courseType', 'Actions'];
  dataSource: Course[] = [];

  constructor(private courseService: CourseService, private route: Router, private dialog: MatDialog, private documentService: DocumentService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(data => {
      this.dataSource = data;
      console.log(data)
      
    })
  }

  deleteCourse(courseID: string) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(courseID).subscribe(
        {
          next: () => {
            this.dataSource = this.dataSource.filter((course) => course.courseID !== courseID);
            console.log('Course deleted successfully');
          },
          error: (err) => console.error('Failed to delete course: ', err)
        }
      );
    }
  }

  updateCourse(courseID: string) {
    this.route.navigate(['ui-components/updatecourse', courseID]);
  }

  showCourseDetails(course: Course) {
    this.courseService.getCourseByID(course.courseID).subscribe(courseWithDocuments => {
      console.log("list docs:", courseWithDocuments);
      this.dialog.open(CourseDetailsComponent, {
        data: {
          course: courseWithDocuments,
          documentts: courseWithDocuments.documentts
        }
      });
    });
  }

}
