import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { libraryFilterPipe } from './filter.pipe'
import { ImageService } from './metric-details/shared/image.service'


import { LibrariesComponent } from './libraries/libraries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

import { AppRoutingModule } from './app-routing.module';
import { MetricDetailsComponent }  from './metric-details/metric-details.component';
import { DomainService } from './domain.service';
import { LibraryService } from './library.service';
import { GraphService } from './graph.service';
import { MetricViewComponent } from './metric-view/metric-view.component';
import { NgbdTabsetBasic } from './tabset-basic/tabset-basic';





@NgModule({
  declarations: [
    AppComponent,
    LibrariesComponent,
    libraryFilterPipe,
    DashboardComponent,
    BookmarksComponent,
    MetricDetailsComponent,
    NgbdTabsetBasic,
    MetricViewComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [libraryFilterPipe, ImageService, DomainService, LibraryService,GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
