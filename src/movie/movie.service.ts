import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Movie } from './schema/movie.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  findFullText(criteria: string) {
    const sort = { score: { $meta: 'textScore' } };
    return this.movieModel
      .find({ $text: { $search: criteria } }, { score: { $meta: 'textScore' } })
      .sort(sort);
  }

  findClassicByTitle(title: string) {
    return this.movieModel.find({ title });
  }
}
