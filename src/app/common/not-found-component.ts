import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<div class="not-found"><h2>404 - PAGE NOT FOUND,<br/>CLICK HERE TO RETURN TO <a href="/">LANDING PAGE</a></h2></div>',
  styles: ['.not-found { width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; }'],
})
export class NotFoundComponent {}
