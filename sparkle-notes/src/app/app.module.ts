import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { AnimationHomepageComponent } from './animation/homepage/homepage.component';
import { TextToolComponent } from './common/text-tool/text-tool.component';
import { ThemebarComponent } from './common/themebar/themebar.component';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { EditorComponent } from './common/editor/editor.component';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';
import { HashTagsComponent } from './components/hash-tags/hash-tags.component';
import { CheckListDialog} from './components/checklist/checklist.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

@NgModule({
  declarations: [
    AppComponent,
    CheckListDialog,
    LayoutComponent,
    NavbarComponent, 
    AnimationHomepageComponent,
    FooterComponent,
    HomepageComponent,
    ToolbarComponent,
    TextToolComponent,
    ThemebarComponent,
    EditorComponent,
    AddNotesComponent,
    ChecklistComponent,
    ViewNotesComponent,
    HashTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule, 
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
