import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
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
    path: '404',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
