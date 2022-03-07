import { Component, OnInit } from '@angular/core';
import { FavoriteResult } from 'src/app/shared/models/favorites.model';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: FavoriteResult[] = [];
  currentPage: number = 0;

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  setSelectedItem(favorite: FavoriteResult) {
    this.favoritesService.setSelectedItem(favorite);
  }

  getData() {
    this.currentPage++
    this.favoritesService.getFavorites(this.currentPage).subscribe(resp => {
      this.favorites = resp.results;
    })
  }


}

