import { Component,HostBinding} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent,ProjectModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',  

  animations:[
    trigger('fadein',[
      transition('void=>*',[
        style({opacity:0}),
        animate(1500,style({opacity:1})),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';
}
