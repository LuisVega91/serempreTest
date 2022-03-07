import { Component, OnInit } from '@angular/core';
import { FavoriteResult } from 'src/app/shared/models/favorites.model';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-favorites-wrapper',
  templateUrl: './favorites-wrapper.component.html',
  styleUrls: ['./favorites-wrapper.component.scss']
})
export class FavoritesWrapperComponent implements OnInit {

  selectedItem: FavoriteResult = {};

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.favoritesService.getSelectedItemSubscription().subscribe( resp => {
      this.selectedItem = resp;
    })
  }

}
