import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialsRegisterComponent } from './components/tutorials-register/tutorials-register.component';
import { TutorialsNewComponent } from './components/tutorials-new/tutorials-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialsListComponent,
    TutorialsRegisterComponent,
    TutorialsNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
