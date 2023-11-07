import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'libros',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/books/books.component').then((m) => m.BooksComponent),
  },
  {
    path: 'libros/:id',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/components/book/book.component').then(
        (m) => m.BookComponent
      ),
  },
  {
    path: 'sobre-mi',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'noticias',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/news/news.component').then((m) => m.NewsComponent),
  },
  {
    path: 'otras-yo',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/others/others.component').then((m) => m.OthersComponent),
  },
  {
    path: 'contacto',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
