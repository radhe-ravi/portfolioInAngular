import { Component ,Input, TemplateRef} from '@angular/core';
import { Project } from '../_model/project';
import {NgForOf} from "@angular/common";
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgForOf,ProjectModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})

export class ProjectCardComponent {
  @Input() project = {} as Project;

}

