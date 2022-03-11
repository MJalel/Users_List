import { Component} from '@angular/core';
import { Input } from '@angular/core';
import { DataService, User } from '../services/data.service';
import {ViewMessagePage} from '../view-message/view-message.page'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @Input() items;
  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): User[] {
    return this.data.getMessages();
  }

}
