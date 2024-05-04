import { Component, Renderer2,Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Sender } from '../_model/Sender';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  @Input() sender = {}as Sender;
  constructor(private titleService: Title,private renderer:Renderer2) { 
    
    this.titleService.setTitle('Radhe Ravi - Resume');
  }


  DownloadFile(){

    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/files/radhe-resume_exp.pdf');
    link.setAttribute('download','radhe-resume_exp.pdf');
    link.click();
    link.remove();

  }
}
