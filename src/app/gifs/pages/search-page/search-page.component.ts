import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GifsService } from '../../services/gifs.service';
import { GifPhyItem, GifPhyResponse } from '../../interfaces/gigphy.interface';

@Component({
  selector: 'app-search-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-page.component.html',
  styles: ``
})
export default class SearchPageComponent implements OnInit {
  searchQuery = '';
  gifs: GifPhyItem[] = [];
  loading = false;
  hasSearched = false;

  constructor(private gifsService: GifsService) {}

  ngOnInit() {
    // Opcional: cargar GIFs trending al inicio
    this.loadTrendingGifs();
  }

  searchGifs() {
    if (this.searchQuery.trim()) {
      this.loading = true;
      this.hasSearched = true;
      
      this.gifsService.searchGifs(this.searchQuery.trim()).subscribe({
        next: (response: GifPhyResponse) => {
          this.gifs = response.data;
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Error searching gifs:', error);
          this.loading = false;
        }
      });
    }
  }

  loadTrendingGifs() {
    this.loading = true;
    this.hasSearched = false;
    
    this.gifsService.loadTrendingGifs().subscribe({
      next: (response: GifPhyResponse) => {
        this.gifs = response.data;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error loading trending gifs:', error);
        this.loading = false;
      }
    });
  }

  onSearchInput(event: any) {
    if (event.key === 'Enter') {
      this.searchGifs();
    }
  }
}
