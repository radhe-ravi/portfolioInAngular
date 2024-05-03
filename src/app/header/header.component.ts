import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

  names: string[] = [
    "Software Developer", "Music Developer",
  ]

  constructor(private titleService: Title) {

    this.titleService.setTitle('Radhe Ravi - Home');
  }

}
