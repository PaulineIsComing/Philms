//modèle contenant plus de détails sur un film

export class MovieById{
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number,
        name: string,
        poster_path: string,
        backdrop_path: string
      };
    budget: number;
    genres:[ {
        id: number,
        name: string
    }];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    revenue: number;
    runtime: number;
    spoken_languages: any[];
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};