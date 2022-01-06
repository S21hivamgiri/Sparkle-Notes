import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { HashTagsComponent } from './components/hash-tags/hash-tags.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';

const routes: Routes = [
  {
    path: "", component: HomepageComponent,
  },
  {
    path: "note", component: AddNotesComponent,
  },
  {
    path: "view-note/:id", component: ViewNotesComponent,
  },
  {
    path: "hashtag/:tag", component: HashTagsComponent,
  },
  {
    path: "checklist", component: ChecklistComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
