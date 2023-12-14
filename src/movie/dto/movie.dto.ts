export class CreateMovieDto {
  _id: Id;
  plot: string;
  genres: string[];
  runtime: Runtime;
  cast: string[];
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Released;
  directors: string[];
  rated: string;
  awards: Awards;
  lastupdated: string;
  year: Runtime;
  imdb: Imdb;
  countries: string[];
  type: string;
  tomatoes: Tomatoes;
  num_mflix_comments: Runtime;
}

interface Tomatoes {
  viewer: Viewer;
  fresh: Runtime;
  critic: Viewer;
  rotten: Runtime;
  lastUpdated: Released;
}

interface Viewer {
  rating: Rating;
  numReviews: Runtime;
  meter: Runtime;
}

interface Imdb {
  rating: Rating;
  votes: Runtime;
  id: Runtime;
}

interface Rating {
  $numberDouble: string;
}

interface Awards {
  wins: Runtime;
  nominations: Runtime;
  text: string;
}

interface Released {
  $date: Date;
}

interface Date {
  $numberLong: string;
}

interface Runtime {
  $numberInt: string;
}

interface Id {
  $oid: string;
}
