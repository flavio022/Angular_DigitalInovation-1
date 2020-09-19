import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './courses/courses-list.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [AppComponent, CoursesListComponent, StarsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
