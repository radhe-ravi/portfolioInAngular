import { Component ,Input} from '@angular/core';
import { Project } from '../_model/project';
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

}
