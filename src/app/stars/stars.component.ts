import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-stars'
})
export class StarsComponent implements OnChanges {
  @Input()
  rating: number = 0;

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating * 94) / 5;
  }
}
