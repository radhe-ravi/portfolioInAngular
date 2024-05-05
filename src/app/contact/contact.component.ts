import { Component } from '@angular/core';
import { socialLinks } from '../_model/socialLinks';
import { NgFor } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations:[
    trigger('fadein',[
      transition('void=>*',[
        style({opacity:0}),
        animate(1500,style({opacity:1})),
      ])
    ]),
  ]
})
export class ContactComponent {
  
  socialLinks = socialLinks
}
