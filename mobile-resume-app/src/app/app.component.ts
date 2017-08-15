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
    if (locationY < elementY) {
      // Scroll downwards until it finds the element.
      const scrollNow = setInterval(() => {
        locationY = locationY + scrollDelta;
        window.scrollTo(0, locationY);
        if (locationY >= elementY) clearInterval(scrollNow);
      }, scrollSpeed)
    }else{
      // Scroll upwards until it finds the element
      const scrollNow = setInterval(() => {
        locationY = locationY - scrollDelta;
        window.scrollTo(0, locationY);
        if (locationY <= elementY) clearInterval(scrollNow);
      }, scrollSpeed)
    }
  }

  getElementY(id){
    const element = <HTMLInputElement>document.getElementById(id);
    const elementY = element.offsetTop;
    return elementY;
  }

  smoothScroll(id) {
    // combines the above to functions to achieve a smooth scroll.
    const elementY = this.getElementY(id);
    this.scrollToElement(elementY);
  }
}
