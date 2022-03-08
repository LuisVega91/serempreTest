import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FavoriteModel } from '../models/favorites.model';
import { FavoritesPaginatedModel, FavoritesPaginatedTemplate } from '../models/favorites-paginated.model';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  url_path = environment.url_path;
  api_key = environment.api_key;

  selectedItem: BehaviorSubject<FavoriteModel> = new BehaviorSubject(new FavoriteModel());
  constructor(private http: HttpClient) { }

  getFavorites(page = 1 ): Observable<FavoriteModel[]>{
    return this.http.get<FavoritesPaginatedTemplate>(`${this.url_path}/movie/popular?api_key=${this.api_key}&page=${page}`)
    .pipe(map(resp => new FavoritesPaginatedModel(resp)))
    .pipe(map(resp => resp.results));
  }

  setSelectedItem(favorite: FavoriteModel){
    this.selectedItem.next(favorite);
  }

  getSelectedItemSubscription(): Observable<FavoriteModel>{
    return this.selectedItem.asObservable();
  }
}
