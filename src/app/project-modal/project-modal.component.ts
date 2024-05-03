import { Component } from '@angular/core';
import { Project } from '../_model/project';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Project;
  constructor(public bsModalRef: BsModalRef) { 

  }

}
