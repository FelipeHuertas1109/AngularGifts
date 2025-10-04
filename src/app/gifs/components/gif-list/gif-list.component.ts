import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../services/gifs.service';
import { GifPhyItem, GifPhyResponse } from '../../interfaces/gigphy.interface';
import { GifListItemComponent } from './gif-list-item/gif-list-item.component';

@Component({
  selector: 'gif-list',
  imports: [CommonModule, GifListItemComponent],
  templateUrl: './gif-list.component.html',
  styles: ``
})
export class GifListComponent implements OnInit {
  gifs: GifPhyItem[] = [];
  loading = true;

  constructor(private gifsService: GifsService) {}

  ngOnInit() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.loading = true;
    this.gifsService.loadTrendingGifs().subscribe({
      next: (response: GifPhyResponse) => {
        this.gifs = response.data;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error loading gifs:', error);
        this.loading = false;
      }
    });
  }
}
