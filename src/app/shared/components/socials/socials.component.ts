import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FacebookComponent } from './icons/facebook/facebook.component';
import { InstagramComponent } from './icons/instagram/instagram.component';
import { TiktokComponent } from './icons/tiktok/tiktok.component';
import { XComponent } from './icons/x/x.component';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FacebookComponent,
    InstagramComponent,
    XComponent,
    TiktokComponent,
  ],
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  socialLinks = {
    facebook: '#',
    instagram: '#',
    x: '#',
    tiktok: '#',
  };
}
