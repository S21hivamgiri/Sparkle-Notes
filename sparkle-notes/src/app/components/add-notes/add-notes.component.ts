import { Component, ViewChild } from '@angular/core';
import { Color, GroupCommandActive } from 'src/app/utilities/interfaces';
import { EditorComponent } from 'src/app/common/editor/editor.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent {
  @ViewChild('editor') editor?: EditorComponent;
  themeColor?: Color;
  content = '';
  hasUrl = false;
  contentValue = false;
  setActive?: GroupCommandActive[];
  hashTags: string[] = [];
  title: string = '';

  selectAll() {
    document.getElementById('editor')!.focus();
    let range = document.createRange();
    range.selectNode(document.getElementById('editor')!);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
  }

  removeAll() {
    this.editor?.removeAll();
  }

  isContentStarted(e: boolean) {
    this.contentValue = e;
  }

  executeCommand(e: { [key: string]: string }) {
    this.editor?.executeCommand(e['cmd'], e['val']);
  }

  setContent(data: string) {
    this.content = data;
  }

  getNonUrlString(data: string) {
    let hasUrlRegex = /<\s*a[^>]*>(.*?)<\s*\/*a>/g
    if (data.match(hasUrlRegex)) {
      this.hasUrl = true;
    }
    return data.replace(hasUrlRegex, "");
  }

  replaceUrl(data: string) {
    let urlRegex = /(\b(https?|ftp|file|http):\/\/)[-A-Za-z0-9+&@#/%?=~_|!:,.]+[-A-Za-z0-9+&@#/%=~_|]/g;
    let matches = new Set(data.match(urlRegex));
    matches?.forEach((url: string) => {
      url=url.split('?').join("\\?")
      let regex = new RegExp(url, "g");
      this.hasUrl = true;
      this.content = this.content.replace(regex, '<a href="' + url + '">' + url + '</a>');
    });
  }

  replaceEmail(data: string) {
    let emailRegex = /(([^ <>()[\]\\.,;: \s @\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
    let matches = new Set(data.match(emailRegex));
    matches?.forEach((email: string) => {
      let regex = new RegExp(email, "g");
      this.hasUrl = true;
      this.content = this.content.replace(regex, '<a href="mailto:' + email + '">' + email + '</a>')
    });
  }

  replaceHashTags(data: string) {
    let tagsRegex = /#([^"':;.,|#+</>&?$^\s]+)/g;
    let matches = new Set(data.match(tagsRegex));
    matches?.forEach((tag: string) => {
      let regex = new RegExp(tag, "g");
      this.hashTags.push(tag);
      this.hasUrl = true;
      this.content = this.content.replace(regex, '<a href="/hashtag/' + tag.split('#')[1] + '">' + tag + '</a>');
    });
  }

  save(title: string) {
    let result = this.getNonUrlString(this.content);
    this.replaceEmail(result);
    result = this.getNonUrlString(this.content);
    this.replaceUrl(result);
    result = this.getNonUrlString(this.content);
    this.replaceHashTags(result);
    let saveData = {
      content: this.content,
      hasUrl: this.hasUrl,
      hastags: this.hashTags,
      title: title,
    }
    console.log(saveData);
  }

  setTheme(data: Color) {
    this.themeColor = data;
  }
}
