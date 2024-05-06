import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Documentt } from 'src/Models/Document';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.scss']
})
export class DocumentFormComponent implements OnInit{
  myForm: FormGroup;
  id:number=0;
  document : Documentt;

  constructor(private fb: FormBuilder, private documentService :DocumentService , private ac : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.id= this.ac.snapshot.params['id'];
    this.initForm();
  }

  onSubmit() {   
    if (this.myForm.valid) {
      const formData: Documentt = this.myForm.value; 
           
      this.documentService.addDocument(formData).subscribe(
        (response) => {
          console.log('Document ajoutée avec succès:', response);
          this.router.navigate(['ui-components/document']);          
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du Document:', error);         
        }
      );      
    }
  }

  initForm() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }
}
