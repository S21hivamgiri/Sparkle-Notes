import { Component, Inject, Optional } from '@angular/core';
import { Color, GroupCommandActive, ThemeBar, Type } from 'src/app/utilities/interfaces';
import { TYPE_DATA } from 'src/app/utilities/constants';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  themeColor?: Color;
  checkList: string[] = []
  hasUrl = false;
  setActive?: GroupCommandActive[];
  hashTags: string[] = [];
  title: string = '';

  constructor(public dialog: MatDialog) { }

  getNonUrlString(index:number) {
    let hasUrlRegex = /<\s*a[^>]*>(.*?)<\s*\/*a>/g
    if (this.checkList[index].match(hasUrlRegex)) {
      this.hasUrl = true;
    }
    return this.checkList[index].replace(hasUrlRegex, "");
  }

  replaceUrl(index:number) {
    let urlRegex = /((https?|ftp|file|http):\/\/)[-A-Za-z0-9+&@#\/%\?=~_|!:,.]+[-A-Za-z0-9+&@#\/%=~_|]/g;
    let matches = new Set(this.checkList[index].match(urlRegex));
    matches?.forEach((url: string) => {
      let urlNew = url.split('?').join("\\?")
      let regex = new RegExp(urlNew, "g");
      this.hasUrl = true;
      this.checkList[index] = this.checkList[index].replace(regex, '<a href="' + url + '">' + url + '</a>');
    });
  }

  replaceEmail(index:number) {
    let emailRegex = /(([^ <>()[\]\\.,;: \s @\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
    let matches = new Set(this.checkList[index].match(emailRegex));
    matches?.forEach((email: string) => {
      let regex = new RegExp(email, "g");
      this.hasUrl = true;
      this.checkList[index] = this.checkList[index].replace(regex, '<a href="mailto:' + email + '">' + email + '</a>')
    });
  }

  replaceHashTags(data: string) {
    let tagsRegex = /#([^"':;.,|#+</>&?$^\s]+)/g;
    let matches = new Set(data.match(tagsRegex));
    matches?.forEach((tag: string) => {
      tag = tag.split('#')[1]
      if (!(this.hashTags.indexOf(tag)>-1))
      this.hashTags.push(tag);
    });
  }

  save(themeData: ThemeBar) {
    let content = [...this.checkList];
    this.checkList.forEach((data, i) => {
      let result = this.getNonUrlString(i);
      this.replaceEmail(i);
      result = this.getNonUrlString(i);
      this.replaceUrl(i);
      result = this.getNonUrlString(i);
      this.replaceHashTags(result);
    });
    if (!themeData.linked) {
      this.checkList = content;
    }
    
    let saveData = {
      content: this.checkList,
      initialContent: content,
      hasUrl: this.hasUrl,
      hashtags: this.hashTags,
      title: themeData.title,
      bookmarked: themeData.bookmarked,
      theme: this.themeColor,
      type: this.getType("checklist"),
      timeCreated: new Date(),
      timeEdited: new Date(),
    }
    console.log(saveData);
  }

  getType(checkList: string): Type | null {
    let index = 0;
    TYPE_DATA.forEach((data: Type, i) => {
      if (data.value === checkList) {
        index = i;
      }
    });
    return TYPE_DATA[index];
  }

  setTheme(data: Color) {
    this.themeColor = data;
  }

  addnew(isTop: boolean) {
    const dialogRef = this.dialog.open(CheckListDialog, {
      width: "100vw",
      data: this.themeColor,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        if (isTop) {
          this.checkList.unshift(result);
        }
        else {
          this.checkList.push(result)
        }
      }
    });
  }
}

@Component({
  selector: 'dialog-checklist',
  templateUrl: 'check-list-dialog.html'
})
export class CheckListDialog {
  content: string = '';

  constructor(
    @Optional() public dialogRef: MatDialogRef<CheckListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Color,
  ) { }

  complete() {
    this.dialogRef.close(this.content);
  }

  saveAndNext() { }

  closeDialog() {
    this.dialogRef.close();
  }

  setContent(data: string) {
    this.content = data;
  }
}