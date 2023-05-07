import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter {{ counter }}</h1>


    <button class="btn btn-primary m-2" (click)="decreaseBy(5)">-1</button>
    <button class="btn btn-primary m-2" (click)="reset()">Reset</button>
    <button class="btn btn-primary m-2" (click)="increaseBy()">+1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBy(value: number): void {
    this.counter -= value;
  }

  reset(): void {
    this.counter = 10;
  }


}
