import { Component } from '@angular/core';

@Component({
  selector: 'toh-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  labTitle = 'Twitch Heroes';
  labState = 'Using the redux pattern with NgRx';
}
