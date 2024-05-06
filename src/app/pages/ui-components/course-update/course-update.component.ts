import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/Models/Course';
import { CourseCategory } from 'src/Models/CourseCategory';
import { CourseType } from 'src/Models/CourseType';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss']
})
export class CourseUpdateComponent implements OnInit {

  dataSource: Course;
  myForm: FormGroup;
  id: string;
  courseId: string;
  course: Course;
  courseCategories = Object.values(CourseCategory).filter(value => isNaN(Number(value)));
  courseTypes = Object.values(CourseType).filter(value => isNaN(Number(value)));
  selectedFile: File | null = null;


  constructor(private http: HttpClient,private fb: FormBuilder, private courseservice: CourseService, private ac: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.ac.params.subscribe(params => {
      this.courseId = params['courseID'];
      console.log(this.courseId); 
      this.initForm();
      if (this.courseId) { 
        this.courseservice.getCourseByID(this.courseId).subscribe( 
          (data: any) => {
            let date = new Date(data.courseDate);
            let formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
            data.courseDate = formattedDate;
            this.remplissage(data)
          }
        )
      } else {
        console.error('courseID parameter is undefined');
      }
    })
  }


  remplissage(data: any) {
    if (data) {
      this.myForm.patchValue({
        courseCat: data.courseCat,
        title: data.title,
        courseDate: data.courseDate,
        duration: data.duration,
        disponibility: data.disponibility,
        courseType: data.courseType,
        imageData: data.imageData
      });
    } else {
      console.error('Course data is null');
    }
  }


  onSubmit() {
    if (this.myForm.valid) {
      const formData = new FormData();
      formData.append('course', JSON.stringify(this.myForm.value));
  
      if (this.selectedFile) {
        formData.append('file', this.selectedFile, this.selectedFile.name);
      }
  
      console.log("Le cours:", this.myForm.value);
      this.http.put(`http://localhost:8071/Courses/updateCourse/${this.courseId}`, formData).subscribe({
        next: () => this.router.navigate(['ui-components/course'])
      })
      console.log("Le cours:", this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  initForm() {
    this.myForm = this.fb.group({
      courseCat: ['', [Validators.required]],
      title: ['', [Validators.required]],
      courseDate: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      disponibility: ['', [Validators.required]],
      courseType: ['', [Validators.required]]
    });
  }

}
