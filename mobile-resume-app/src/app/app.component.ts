import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  /* This is a for scrolling */
  scrollToElement(elementY){
    // Get the current location of this browser
    var locationY: number = window.scrollY;
    // Set the speed and increment of how fast it scrolls.
    const scrollSpeed = 1;
    const scrollDelta = 5;
    // Loop through a continues scroll up until locationY == elementY

  }

  getElementY(id){
    // must write a function to get the Y of an element by its ID
  }

  smoothScroll(id) {
    // combines the above to functions to achieve a smooth scroll.
    const elementY = this.getElementY(id);
    this.scrollToElement(elementY);
  }
}
