import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrariesComponent } from './libraries/libraries.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { MetricDetailsComponent }  from './metric-details/metric-details.component';
import { MetricViewComponent } from './metric-view/metric-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'libraries', component: LibrariesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'library/:id', component: MetricDetailsComponent },
  { path: 'domain/:id', component: MetricDetailsComponent },
  { path: 'image/:id', component: MetricViewComponent },
  { path: 'bookmarks', component: BookmarksComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
