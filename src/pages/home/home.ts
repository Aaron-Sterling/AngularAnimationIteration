import { Component } from '@angular/core';
import { IONITRON_BOUNCE, STARTING_STATE, ODD_BOUNCE, EVEN_BOUNCE } from './animation-definition';
import { isPositiveInteger } from './helper-functions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [ IONITRON_BOUNCE ]
})
export class HomePage {

  bounceState: string = STARTING_STATE;
  numberOfBounces: number = 5;
  bouncesRemaining: number = 0;

  constructor() {}

  startBouncing() {
    console.log('starting to bounce');
    if (isPositiveInteger(this.numberOfBounces)) {
      this.bouncesRemaining = this.numberOfBounces;
      this.continueBouncing();
    }
    else {
      // do nothing
      // unnecessary error trap because the input in this example is from an ion-range
      // but useful in case the inpuut is from a less controlled source
    }    
  }
  
  private continueBouncing() {
    if (this.bouncesRemaining % 2 != 0) {
      console.log('odd numbered bounce');
      this.bounceState = ODD_BOUNCE;
    }
    else {
      console.log('even numbered bounce');
      this.bounceState = EVEN_BOUNCE;
    }
  }

  bounceCompleted() {
    this.bouncesRemaining -= 1;
    if (this.bouncesRemaining > 0) {
      this.continueBouncing();
    }
    else {
      this.stopBouncing();
    }
  }

  stopBouncing() {
    console.log('bouncing stopped');
    this.bounceState = STARTING_STATE;
    this.bouncesRemaining = 0;
  }
}
