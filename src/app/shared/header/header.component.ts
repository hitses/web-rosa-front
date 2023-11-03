import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsComponent } from '../components/socials/socials.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SocialsComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
