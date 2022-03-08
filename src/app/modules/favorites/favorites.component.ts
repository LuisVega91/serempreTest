import { Component, OnInit } from '@angular/core';
import { FavoriteModel } from 'src/app/shared/models/favorites.model';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: FavoriteModel[] = [];
  currentPage: number = 1;

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.getFavoritesSubscription()
  }

  setSelectedItem(favorite: FavoriteModel) {
    this.favoritesService.setSelectedItem(favorite);
  }

  getFavoritesSubscription() {
    this.favoritesService.getFavorites(this.currentPage).subscribe(resp => {
      this.favorites = resp;
    })
  }

  nextPage(){
    this.currentPage++;
    this.getFavoritesSubscription();
  }


}

