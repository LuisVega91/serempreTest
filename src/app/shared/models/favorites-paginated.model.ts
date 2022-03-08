import { FavoriteModel, FavoriteTemplate } from "./favorites.model";

export class FavoritesPaginatedModel implements FavoritesPaginatedTemplate{
  page?: number;
  results: FavoriteModel[] = [];
  total_pages?: number;
  total_results?: number;

  constructor(favoritesPaginatedTemplate: FavoritesPaginatedTemplate){
    Object.assign(this,favoritesPaginatedTemplate)
    this.results = this.results.map( f => new FavoriteModel(f))
  }
}

export interface FavoritesPaginatedTemplate {
  page?:          number;
  results?:       FavoriteTemplate[];
  total_pages?:   number;
  total_results?: number;
}
