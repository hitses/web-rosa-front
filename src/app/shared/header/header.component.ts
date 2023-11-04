import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../components/socials/socials.component';
import { TitleComponent } from '../components/title/title.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SocialsComponent, TitleComponent, NavbarComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
