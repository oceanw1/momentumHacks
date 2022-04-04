import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { LoginPageComponent } from './login-signup-page/login-page/login-page.component';
import { LoginSignupPageComponent } from './login-signup-page/login-signup-page.component';
import { ProfilePageComponent } from './login-signup-page/profile-page/profile-page.component';
import { ItemSidebarComponent } from './maps-page/item-sidebar/item-sidebar.component';
import { MapsPageComponent } from './maps-page/maps-page.component';
import { StartSidebarComponent } from './maps-page/start-sidebar/start-sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchoolsPageComponent } from './schools-page/schools-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },

  { path: 'signup', component: LoginSignupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  {
    path: 'maps',
    component: MapsPageComponent,
    children: [
      { path: '', component: StartSidebarComponent },
      { path: ':id', component: ItemSidebarComponent },
    ],
  },
  { path: 'schools', component: SchoolsPageComponent },
  { path: 'jobs', component: JobsPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
