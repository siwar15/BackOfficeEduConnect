import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Documentt } from 'src/Models/Document';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-update',
  templateUrl: './document-update.component.html',
  styleUrls: ['./document-update.component.scss']
})
export class DocumentUpdateComponent {
  dataSource: Documentt;
  myForm: FormGroup;
  id: string;

  constructor(private fb: FormBuilder, private documentService: DocumentService, private ac: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.ac.params.subscribe(paramas => { this.id = paramas['documentID'] })
    console.log(this.id);
    this.initForm();
    this.documentService.getDocumentByID(this.id).subscribe(
      (data: Documentt) => {
        this.remplissage(data)
      }
    )
  }

  remplissage(document: Documentt) {
    this.myForm.patchValue({
      title: document.title,
      content: document.content
    })
  }
  onSubmit() {
    if (this.myForm.valid) {

      console.log(this.myForm.value);
      this.documentService.updateDocument(this.myForm.value, this.id).subscribe({
        next: () => this.router.navigate(['ui-components/document']),
      })
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  initForm() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }
}
