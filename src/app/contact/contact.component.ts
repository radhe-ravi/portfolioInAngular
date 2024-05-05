import { Component } from '@angular/core';
import { socialLinks } from '../_model/socialLinks';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  socialLinks = socialLinks
}
