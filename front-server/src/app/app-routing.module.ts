import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialsRegisterComponent } from './components/tutorials-register/tutorials-register.component';
import { TutorialsNewComponent } from './components/tutorials-new/tutorials-new.component';



const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  //
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: TutorialsRegisterComponent },

  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: 'new', component: TutorialsNewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }