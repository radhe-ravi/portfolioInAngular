import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_model/project';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projectName :Project = {
    id:0,
    name:"something",
    summary:" something",
    description:" something",
    projectLink:"",
    tags:['Angular' ,'TypeScript'],
    picture:['https://via.placeholder.com/150','https://via.placeholder.com/150','https://via.placeholder.com/150']
  }

  constructor(private titleService: Title) { 
    
    this.titleService.setTitle('Radhe Ravi - Projects');
  }
}
