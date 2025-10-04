import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GifPhyResponse } from '../interfaces/gigphy.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);

  loadTrendingGifs(){
    return this.http.get<GifPhyResponse>(`${environment.apiUrl}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: '25',
        offset: '0',
        rating: 'g',
        bundle: 'messaging_non_clips'
      }
    });
  }

  searchGifs(query: string, offset: number = 0, limit: number = 25){
    return this.http.get<GifPhyResponse>(`${environment.apiUrl}/gifs/search`, {
      params: {
        api_key: environment.apiKey,
        q: query,
        limit: limit.toString(),
        offset: offset.toString(),
        rating: 'g',
        lang: 'en',
        bundle: 'messaging_non_clips'
      }
    });
  }
}
