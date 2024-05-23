import { Component, Renderer2,Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {NgForOf} from "@angular/common";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(500)
      ]),
    ]),
    trigger('fadein',[
      transition('void=>*',[
        style({opacity:0}),
        animate(1500,style({opacity:1})),
      ])
    ]),

    trigger('flyOutIn', [
      state('in', style({ transform: 'translateY(-100%)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(1000)
      ]),
    ]),
  ]
})
export class ResumeComponent {

  skills = {
    language : ["Java",'JavaScript','C++','Typescript'],
    framework : ['Angular','Node','React','Express'],
    library : ['Spring Boot','JavaFX','Hibernate','Thymeleaf'],
    database : ['MySQL','MongoDB'],
    tools : ['IntelliJ','Eclipse','Visual Studio Code','Git','Postman','Maven'],
    other : ['HTML','CSS','Bootstrap','Microservices','Problem Solving'],
    devops:['Linux','Windows','Docker','Data structures']

  }

  certificates ={
    coursera :['Object Oriented Programming in JAVA by San Diego University.',' Digital Transformation with Google Cloud by Google.','Introduction to Web Development course by UC DAVIS.'],
    infyosis:['Java 11 advanced by Infosys.','Spring MVC Course by Infosys Springboard.']
  }
 
  constructor(private titleService: Title,private renderer:Renderer2) { 
    
    this.titleService.setTitle('Radhe Ravi - Resume');
  }


  DownloadFile(){

    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/files/Radhe_Radhe_Resume.pdf');
    link.setAttribute('download','Radhe_Resume.pdf');
    link.click();
    link.remove();

  }
}
