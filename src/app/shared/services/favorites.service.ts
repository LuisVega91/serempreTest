import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FavoriteResult, FavoritesModel } from '../models/favorites.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  url_path = environment.url_path;
  api_key = environment.api_key;

  selectedItem: BehaviorSubject<FavoriteResult> = new BehaviorSubject({});
  constructor(private http: HttpClient) { }

  getFavorites(page = 1 ): Observable<FavoritesModel>{
    return this.http.get(`${this.url_path}/movie/popular?api_key=${this.api_key}&page=${page}`)
    .pipe(map(resp => new FavoritesModel(resp)));
  }

  setSelectedItem(favorite: FavoriteResult){
    this.selectedItem.next(favorite);
  }

  getSelectedItemSubscription(): Observable<FavoriteResult>{
    return this.selectedItem.asObservable();
  }
}
