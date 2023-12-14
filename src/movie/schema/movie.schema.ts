import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Movie>;

class Date {
  @Prop()
  $numberLong: string;
}

class Runtime {
  @Prop()
  $numberInt: string;
}
class Released {
  @Prop()
  $date: Date;
}

class Id {
  @Prop()
  $oid: string;
}

class Rating {
  @Prop()
  $numberDouble: string;
}

class Viewer {
  @Prop()
  rating: Rating;
  @Prop()
  numReviews: Runtime;
  @Prop()
  meter: Runtime;
}

class Imdb {
  @Prop()
  rating: Rating;
  @Prop()
  votes: Runtime;
  @Prop()
  id: Runtime;
}

class Awards {
  wins: Runtime;
  @Prop()
  nominations: Runtime;
  @Prop()
  text: string;
}

class Tomatoes {
  @Prop()
  viewer: Viewer;
  @Prop()
  fresh: Runtime;
  @Prop()
  critic: Viewer;
  @Prop()
  rotten: Runtime;
  @Prop()
  lastUpdated: Released;
}

@Schema()
export class Movie {
  @Prop({ type: String })
  _id: Id;

  @Prop()
  plot: string;

  @Prop()
  genres: string[];

  @Prop()
  runtime: Runtime;

  @Prop()
  cast: string[];

  @Prop()
  poster: string;

  @Prop()
  title: string;

  @Prop()
  fullplot: string;

  @Prop()
  languages: string[];

  @Prop()
  released: Released;

  @Prop()
  directors: string[];

  @Prop()
  rated: string;

  @Prop()
  awards: Awards;

  @Prop()
  lastupdated: string;

  @Prop()
  year: Runtime;

  @Prop()
  imdb: Imdb;

  @Prop()
  countries: string[];

  @Prop()
  type: string;

  @Prop()
  tomatoes: Tomatoes;

  @Prop()
  num_mflix_comments: Runtime;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
