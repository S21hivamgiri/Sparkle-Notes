import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NotesComponent } from './components/notes/notes.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent,
  },
  {
    path: "note", component: NotesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
