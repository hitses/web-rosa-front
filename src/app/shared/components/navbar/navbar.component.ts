import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, SocialsComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const logoLink = document.querySelector('.logo-link');
    if (window.scrollY > 150) {
      logoLink!.classList.remove('hidden-logo');
    } else {
      logoLink!.classList.add('hidden-logo');
    }

    const socialLinks = document.querySelector('.social-links');
    if (window.scrollY > 30) {
      socialLinks!.classList.remove('hidden-socials');
    } else {
      socialLinks!.classList.add('hidden-socials');
    }
  }
}
