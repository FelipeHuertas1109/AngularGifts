import { Component, input } from '@angular/core';
import { GifPhyItem } from '../../../interfaces/gigphy.interface';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html',
  styles: ``
})
export class GifListItemComponent {
  gif = input.required<GifPhyItem>();

  get imageUrl(): string {
    return this.gif().images.original.url;
  }

  get title(): string {
    return this.gif().title;
  }

  get altText(): string {
    return this.gif().title || 'GIF';
  }
}