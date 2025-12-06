import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  // 1. Default Route (Home)
  { path: '', component: Home }, 
  
  // 2. About Page
  { path: 'about', component: About }, 
  
  // 3. Services Page
  { path: 'services', component: Services }, 
  
  // 4. Contact Page
  { path: 'contact', component: Contact }, 
  
  // 5. Wildcard (404 Page): Kapag walang match, ibalik sa Home
  { path: '**', redirectTo: '' } 
];