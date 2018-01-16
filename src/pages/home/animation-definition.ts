import { trigger, transition, state, style, keyframes, animate } from '@angular/animations';

// first we define the animation we want to iterate

const BOUNCE_SPEED = '1s';
const SINGLE_BOUNCE = animate(BOUNCE_SPEED, keyframes([   
                                                            style({transform: 'translateY(0)'}),
                                                            style({transform: 'translateY(-100%)'}),
                                                            style({transform: 'translateY(0)'})
                                                      ])
                             );

// then we define the animation we actually use
// it contains an even copy and an odd copy of our animation from above
// in the home.ts file, we will accomplish the iteration by tacking between the even and odd states, until our iteration counter is exhausted

// export state names to lock out typos
export const STARTING_STATE = 'startingState';
export const ODD_BOUNCE = 'oddBounce';
export const EVEN_BOUNCE = 'evenBounce';
// and we finally can define the animation we use in the application
export const IONITRON_BOUNCE = trigger('ionitronBounce', [
                                                            state(STARTING_STATE, style({})),
                                                            transition('* => ' + ODD_BOUNCE, SINGLE_BOUNCE),
                                                            transition('* => ' + EVEN_BOUNCE, SINGLE_BOUNCE),
                                                         ]);