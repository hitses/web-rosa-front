import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss'],
})
export class InstagramComponent {
  defaultImage: string = 'instagram.svg';

  changeImage(colorImage: string) {
    this.defaultImage = colorImage;
  }
}
