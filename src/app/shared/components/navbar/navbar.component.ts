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
  navHome = {
    class: 'logo-link hidden-logo',
    path: '/',
  };
  homeImg = {
    src: '/assets/imgs/feather.png',
    alt: 'Logotipo a color de la escritora española Rosa Celiberti Ribera',
  };
  navLinks = [
    {
      path: '/libros',
      name: 'LIBROS',
    },
    {
      path: '/sobre-mi',
      name: 'SOBRE MÍ',
    },
    {
      path: '/noticias',
      name: 'NOTICIAS',
    },
    {
      path: '/otras-yo',
      name: 'OTRAS YO',
    },
    {
      path: '/contacto',
      name: 'CONTACTO',
    },
  ];
  socialsClass = 'social-links hidden-socials';

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
