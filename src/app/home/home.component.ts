import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

  ,animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1500)
      ]),
    ]),
    trigger('fadein',[
      transition('void=>*',[
        style({opacity:0}),
        animate(1500,style({opacity:1})),
      ])
    ]),

    trigger('flyOutIn', [
      state('closed', style({ transform: 'translateX(-100%)' })),
      transition('* => void', [
        style({ transform: 'translateX(0)' }),
        animate(1500)
      ]),
    ])
  ]
})
export class HomeComponent {

  name = "Radhe Ravi";
  description = `
  an aspiring Software Engineer.I have a strong background in
                            Development and am always looking for new challenges and opportunities to learn and grow. I am a
                            Developer and enjoy Writing Poems in my free time.
    
                            I am excited to bring my skills to a dynamic and innovative team. If you are looking for a
                            Developer who is passionate about Development, I would love to hear from you.
    
                            Thank you for visiting my portfolio. I look forward to connecting with you.
  `;

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Radhe Ravi - Home');
  }

}
