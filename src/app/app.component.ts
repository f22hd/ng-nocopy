import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nocopy';
  text:string = 'A text to be copied';

  onCopyAttemp(){
    console.error('no copy please')
  }
}
