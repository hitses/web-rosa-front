import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  img = {
    link: '/',
    src: '/assets/imgs/feather.png',
    alt: 'Logotipo editorial de la escritora española Rosa Celiberti Ribera',
  };

  title = {
    name: 'Rosa',
    surname: 'Celiberti',
    lastname: 'Ribera',
  };
}
