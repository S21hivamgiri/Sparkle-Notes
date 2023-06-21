import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { AnimationHomepageComponent } from './animation/homepage/homepage.component';
import { MatSelectModule } from '@angular/material/select';
import { TextToolComponent } from './common/text-tool/text-tool.component';
import { ThemebarComponent } from './common/themebar/themebar.component';
import { EditorComponent } from './common/editor/editor.component';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ViewNotesComponent } from './components/view-notes/view-notes.component';
import { HashTagsComponent } from './components/hash-tags/hash-tags.component';
import { CheckListDialog} from './components/checklist/checklist.component';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginScreenComponent } from './common/login-screen/login-screen.component';

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
    HashTagsComponent,
    LoginScreenComponent
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
