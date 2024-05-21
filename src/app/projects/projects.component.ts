import { Component,HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_model/project';
import { Tag } from '../_model/tag';
import { NgForOf } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',

  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(-100%)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate(1000)
      ]),
    ]),
    trigger('fadein',[
      transition('void=>*',[
        style({opacity:0}),
        animate(1500,style({opacity:1})),
      ])
    ])
  ]

  /*
  animations:[
    trigger('fadein',[
      transition('void=>*',[
        style({opacity:0}),
        animate(1500,style({opacity:1})),
      ])
    ])
  ]
  */

})
export class ProjectsComponent {

  projectName: Project[] = [
    {
      id: 0,
      name: "Simple Calculator",
      summary: "The calculator is a simple and easy-to-use calculator that can be used for basic calculations. The calculator is built using Angular and TypeScript, which makes it easy to maintain and extend. The calculator can be used in any web application that requires a simple calculator.",
      description: " something",
      projectLink: "https://github.com/radhe-ravi/simpleCalculator",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      picture: "../../assets/images/SimpleCalculator.png"
    },
    {
      id: 1,
      name: "EDU-CONNECT",
      summary: "Edu Connect is a learning portal built using Spring Boot. The portal provides a platform for students and teachers to connect and learn. The portal has features such as course creation, course management, student management, and user authentication.",
      description: " something",
      projectLink: "https://github.com/radhe-ravi/EDUCONNECT",
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
      picture: '../../assets/images/edu.png'
    },
    {
      id: 2,
      name: "Connect Four",
      summary: "Connect Four is a two-player game implemented using JavaFX and Java. Players take turns dropping colored discs, The goal is to connect four discs in a row before the opponent does. The game can be won horizontally, vertically, or diagonally.",
      description: " something",
      projectLink: "https://github.com/radhe-ravi/ConnectFour",
      tags: [Tag.JAVA, Tag.JAVAFX],
      picture: "../../assets/images/connect.png"
    },
    {
      id: 3,
      name: "Portfolio",
      summary: "A portfolio is a website that showcases a person's skills, experiences, and achievements. A portfolio can be built using Angular and TypeScript.",
      description: " something",
      projectLink: "https://github.com/radhe-ravi/portfolioInAngular",
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
      picture: "../../assets/images/port.png"
    },
    
    {
      id: 4,
      name: "Newspaper Agency Manager",
      summary: ` Newspaper Agency Manager Tech is a Java-based desktop application that helps manage the day-to-day operations of a newspaper agency. The system is designed to automate various tasks, such as managing subscriptions, tracking payments, and generating reports.`,
      description: " something",
      projectLink: "https://github.com/radhe-ravi/NEWSPAPER_AGENCY_MANAGER",
      tags: [Tag.JAVA, Tag.JAVAFX],
      picture: "../../assets/images/news.png"
    },
    {
      id: 5,
      name: "Authentication",
      summary: "Designd a secure and scalable authentication microservice for a portfolio website project using Spring Boot and Java, incorporating best practices for user authentication and authorization.",
      description: " something",
      projectLink: "https://github.com/radhe-ravi/portfolioInAngular",
      tags: [Tag.JAVA, Tag.SPRINGBOOT],
      picture: "../../assets/images/auth.png"
    },

  ]

  constructor(private titleService: Title) {

    this.titleService.setTitle('Radhe Ravi - Projects');
  }
}
