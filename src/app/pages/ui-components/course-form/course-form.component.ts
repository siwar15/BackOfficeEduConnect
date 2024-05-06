import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/Models/Course';
import { CourseCategory } from 'src/Models/CourseCategory';
import { CourseType } from 'src/Models/CourseType';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  myForm: FormGroup;
  id: number = 0;
  course: Course;
  courseCategories = Object.values(CourseCategory).filter(value => isNaN(Number(value)));
  courseTypes = Object.values(CourseType).filter(value => isNaN(Number(value)));
  selectedFile: File | null = null;


  constructor(private http: HttpClient, private fb: FormBuilder, private courseservice: CourseService, private ac: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    this.id = this.ac.snapshot.params['id'];
    this.initForm();
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = new FormData();
      formData.append('course', JSON.stringify(this.myForm.value));

      if (this.selectedFile) {
        formData.append('file', this.selectedFile, this.selectedFile.name);
      }

      this.http.post('http://localhost:8071/Courses/addCourse', formData).subscribe(
        (response) => {
          console.log('Course added successfully:', response);
          this.router.navigate(['ui-components/course']);
        },
        (error) => {
          console.error('Error while adding the course:', error);
        }
      );
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  initForm() {
    this.myForm = this.fb.group({
      courseCat: ['', [Validators.required]],
      title: ['', [Validators.required]],
      courseDate: ['', [Validators.required, this.dateValidator]],
      duration: ['', [Validators.required, Validators.min(1)]],
      disponibility: ['', [Validators.required]],
      courseType: ['', [Validators.required]]
    });
  }

  dateValidator(control: AbstractControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const now = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);
    return selectedDate < now ? { 'invalidDate': { value: control.value } } : null;
  }

}
